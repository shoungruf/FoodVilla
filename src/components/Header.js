import { useContext, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import loginPage from "./loginPage";
import useOnlineUser from "../utils/useOnlineUser";
import userContext from "../utils/userContext";
import ThemeContext from "../utils/useThemeContext";
import {useSelector} from "react-redux";
import store from "../utils/redux/Store";
import {BsCartFill} from "react-icons/bs";


// react component
const Title = () => {
  return (
    <div id="title" key="h2" className="">
      <Link to="/">
        <img
          className="h-28 p-2 shadow-slate-400 cursor-pointer"
          alt="logo"
          src={Logo}
        />
      </Link>
    </div>
  );
};

const Header = () => {
  const [TitleObj, setTitleObj] = useState("Food Villa");

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
 

  return (
    <>
{/*     
    /**
     * header
     *  logo, nav bar list items, cart
     * body
     *  search bar , restaurant list -
     *                  ( restaurant list,
     *                    card
     *                       (image, name, rating, cuisines speciality)
     *                  )
     * footer
     *  links
     */}

    {darkMode ? (
      <>
      <div className="flex shadow-sm max-h-28  bg-slate-700 shadow-slate-400 m-2 justify-between text-white">
      <Title />
      <div className="p-2 m-2 justify-center py-7 font-bold ">{TitleObj}</div>
      <NavBar />
    </div>
      </>
      ) : (
        <>
        <div className="flex shadow-sm max-h-28  bg-red-50 shadow-slate-400 m-2 justify-between">
      <Title />
      <div className="p-2 m-2 justify-center py-7 font-bold ">{TitleObj}</div>
      
      <NavBar/>
    </div>
        </>
      ) }
    
    </>
  );
};



export const IsUserLoggedIn = () => {};
export const NavBar = () => {
  const { user } = useContext(userContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isUserOnline = useOnlineUser(true);
  const theme  = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const cartItems = useSelector(store=> store.cart.items);
  
  function onThemeChange(){
    if(darkMode){
      theme.dispatch({type : 'LIGHTMODE'});
    }else {
      theme.dispatch({type : 'DARKMODE'});
    }
  }

  return (
    <>
      <div className="flex justify-between">
        <ul className="flex py-10">
          <Link to="/About">
            <li
              className="px-3 hover:shadow-sm hover:bg-green-50 focus:underline focus:ring-green-200"
              key="2"
            >
              About
            </li>{" "}
          </Link>
          <Link to="/GroceryVilla">
            <li
              className="px-3  hover:shadow-sm hover:bg-green-50 focus:underline focus:ring-green-200 "
              key="3"
            >
              GroceryVilla
            </li>
          </Link>
          <Link to="/Contact">
            <li
              className="px-3  hover:shadow-sm hover:bg-green-50 focus:underline focus:ring-green-200 "
              key="3"
            >
              Contact
            </li>
          </Link>
          <Link to="/Cart">
          <li
            key="4"
            className="px-3 hover:shadow-sm hover:bg-green-50 focus:underline focus:ring-green-200 flex "
          >
            <BsCartFill/>
            <div className="w-4 h-4 rounded-full justify-center bg-red-500 text-center text-white text-sm">{cartItems.length}</div>
            
          </li>
          </Link>
          {!isLoggedIn ? (
            <>
              <li key="5">
                <button
                  className="px-3 cursor-pointer hover:shadow-sm hover:bg-green-50 focus:underline focus:ring-green-200 "
                  onClick={() => {
                    <loginPage />;
                    setIsLoggedIn(true);
                  }}
                >
                  Log In
                </button>
              </li>
              <li key="6">
                <button
                  className="px-3 cursor-pointer hover:shadow-sm hover:bg-green-50 focus:underline focus:ring-green-200 "
                  onClick={() => {
                    setIsLoggedIn(true);
                  }}
                >
                  Sign Up
                </button>
              </li>
            </>
          ) : (
            <>
              <li key="7" className="px-3">
                <VscAccount /> {user.user.name}
              </li>
              <li key="8" className="px-3">
                <button
                  className="px-3 cursor-pointer hover:shadow-sm hover:bg-green-50 focus:underline focus:ring-green-200"
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  Log Out
                </button>
              </li>
            </>
          )}
        
             <li key ="11" className="px-3">
              {darkMode ? (
                <>
                <div className="w-5 h-3 " ></div>
            <button className="w-5 h-3 rounded-full bg-white"  onClick={onThemeChange}></button>
        </>
              ) :(
                <>
                <div className="w-5 h-3 " ></div>
            <button className="w-5 h-3 rounded-full bg-slate-900"  onClick={onThemeChange}></button>
        
                </>
              )}
          
          </li>
        
         
          {isUserOnline ? (
            <>
              <li
                key="9"
                className=" w-3 h-3 rounded-full bg-lime-600 bg-center"
              />
            </>
          ) : (
            <>
              <li
                key="10"
                className="w-3 h-3 rounded-full bg-red-600 bg-center"
              />
            </>
          )}
        </ul>
      </div>
    </>
  );
};
export default Header;
