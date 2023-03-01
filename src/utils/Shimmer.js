import { IMG_URL } from "../utils/config";
import { AiFillStar } from "react-icons/ai";

const ShimmerRestaurantCard = () => {
  return (
    <>
     <div className="animate-pulse">
     
      <div className="flex flex-wrap bg-red-50">
        <div className="relative flex flex-wrap m-1.5 p-1.5 shadow-sm shadow-slate-700 w-72 h-72 bg-white">
         
            <div className="p-1 w-32 h-10 bg-slate-200"></div>
            <div className="p-1 h-3 bg-slate-200"></div>
            <div className="p-1 h-3 bg-slate-200"></div>
            <div className="p-1 h-3 bg-slate-200"></div>
            <span className="flex justify-center shadow-sm shadow-slate-700 w-10 absolute top-0 left-0 p-1 m-1">
              <AiFillStar />
            
            </span>
          </div>

        </div>
      </div>
    </>
  );
};

const ShimmerComponent = () => (
  <>
    <div className="p-5 m-2 flex shadow-slate-300 shadow-sm bg-neutral-100 focus:bg-neutral-400  ">
        <div className="flex place-items-center w-11/12 " />
        <div className="cursor-pointer bg-slate-300 min-h-full" />
      </div>
<div className="flex flex-wrap">      {ShimmerCards(10).map((card) => {
        return <ShimmerRestaurantCard key={card} />;
      })}
    </div>

  </>
);

const ShimmerCards = (maxCount) => {
  let cards = [];
  for (let i = 0; i < maxCount; i++) {
    cards.push(i);
  }

  return cards;
};

const ShimmerRestaurantMenu = () => {
  return (
    <>
      <div className="animate-pulse grid grid-flow-row space-x-4">
        <div className="grid grid-flow-col grid-cols-4 p-2 m-2 shadow-md shadow-slate-300 h-56 bg-slate-200">
          <div className="w-56 h-30 sm:w-32 sm:h-9 col-span-1 min-h-full min-w-full bg-slate-300 " />

          <div className=" h-20 p-1 m-1 col-span-1 grid grid-flow-row  bg-slate-300">
            <div className=" row-span-1  bg-slate-300" />

            <div className=" h-5 text-xl row-span-1  bg-slate-300"></div>
            <div className="h-5 py-1 row-span-1  bg-slate-300"></div>

            <div className="h-5 flex py-1 row-span-1  bg-slate-300">
              <div className="flex flex-wrap px-2 text-bold">
                <AiFillStar />
              </div>
              <div className="px-2"></div>
            </div>
          </div>
        </div>
        <div className="p-2 m-2 shadow-md shadow-slate-700 bg-red-50">
          <ul>
            <div className="p-2 m-2 flex-wrap justify-centre grid grid-flow-col grid-cols-3 ">
              <div className="grid grid-flow-row w-full col-start-2 border-l-2 border-b-2 border-slate-100">
                <li className="h-20 font-bold text-lg" key="1"></li>

                <li className="h-20 " key="2"></li>
                <li className="h-20 " key="3"></li>
              </div>

              <div className="grid grid-flow-row row-span-1 col-start-3 p-2 m-2 border-b-2 border-slate-200">
                <div className="min-h-fit min-w-fit" />

                <div className="w-20 h-20 bg-white bottom-0 left-auto right-auto">
                  {" "}
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export const ShimmerComponentRestaurantMenu = () => {
  return (
    <>
      <div className="restaurant-menu">
        {ShimmerCards(1).map((card) => {
          return <ShimmerRestaurantMenu key={card} />;
        })}
      </div>
    </>
  );
};

export default ShimmerComponent;
