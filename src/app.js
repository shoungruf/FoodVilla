import React, { Children, lazy, Suspense, useState, useReducer } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import loader from "./utils/loader";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileFunc from "./components/ProfileFunc";
import ProfileClass from "./components/ProfileClass";
import ShimmerComponent from "./utils/Shimmer";
import userContext from "./utils/userContext";
import ThemeContext from "./utils/useThemeContext";
import themeReducer from "./utils/useThemeReducer";
import { initialThemeState } from "./utils/config";
import {Provider} from "react-redux";
import store from "./utils/redux/Store";
import Cart from "./utils/Cart";

const GroceryVilla = lazy(() => import("./components/GroceryVilla")); // dont import in the top

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    user: {
      name: "Raina",
      email: "abc@gmail.com",
    },
    themeMode: "",
  });

  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  return (
    <>
      <Provider store={store}>
        <userContext.Provider
          value={{
            user: user,
          }}
        >
          <ThemeContext.Provider value={{ state, dispatch }}>
            <Header />
            <Outlet />
            <Footer />
          </ThemeContext.Provider>
        </userContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/About", //./about path doesnt work
        element: (
          <Suspense fallback={<loader />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "ProfileFunc",
            element: <ProfileFunc />,
          },
          {
            path: "ProfileClass",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/GroceryVilla",
        element: (
          <Suspense fallback={<ShimmerComponent />}>
            <GroceryVilla />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path : "/Cart",
        element: <Cart />
      },

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
