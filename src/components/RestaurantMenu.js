import { useState } from "react";
import { useParams } from "react-router-dom";
import { ShimmerComponentRestaurantMenu } from "../utils/Shimmer";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { ITEM_IMG_CDN_URL, IMG_CDN_URL } from "../utils/config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";


const RestaurantMenu = () => {
  
  const { resId } = useParams();
  const dispatch = useDispatch();

  const restaurants = useRestaurantMenu({resId});
  console.log(restaurants); 

  function handleOnAddMenuItem(value){
    dispatch(addItem(value));
  }

  return !restaurants ? (
    <ShimmerComponentRestaurantMenu />
  ) : (
    <>
      <div className="grid grid-flow-col grid-cols-4 p-2 m-2 shadow-md shadow-slate-300 h-56 bg-slate-200">
        
          <img
            src={IMG_CDN_URL + restaurants?.cloudinaryImageId}
            className="w-56 sm:w-32 sm:h-9 col-span-1 min-h-full min-w-full "
          />

          <div className=" p-1 m-1 col-span-1 grid grid-flow-row">
            <h2 className="font-bold text-3xl row-span-1">
              {restaurants?.name}
            </h2>
            <h4 className="text-xl row-span-1">
           
              {restaurants?.area + " , " + " " + restaurants?.city}
            </h4>
            <div className="py-1 row-span-1"
            >
              <p>{restaurants?.cuisines.join(",")}</p>
            </div>

            <div className="flex py-1 row-span-1">
              <div
                className="flex flex-wrap px-2 text-bold"
              >  <AiFillStar />
                <span>{restaurants?.avgRating}</span>
              </div>
              <div className="px-2" >|</div>
              <div className="px-2" >{restaurants?.slaString}</div>
              <div className="px-2" >|</div>
              <div className="px-2" >{restaurants?.costForTwoMsg}</div>
            </div> 
         
        
        </div>
      </div>
      <div className="shadow-md shadow-slate-700 bg-red-50">
        {/* <div class="formatMenu">
          <li></li>
        </div>
        <div class="verticalLine"></div> */}

        <ul>
          {Object.values(restaurants?.menu?.items).map((item) => (
            <div className="p-2 m-2 flex-wrap justify-centre grid grid-flow-col grid-cols-3 ">
              
              <div className="grid grid-flow-row w-full col-start-2 border-l-2 border-b-2 border-slate-100">
               
                 
                    <li className="font-bold text-lg" key={item.id}>{item.name}</li>
                 
              
                <li className="" key="2">
                  {item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                    : " "}
                </li>
                <li className = "" key="3">
                  {item.description}
                </li>
              </div>
              {/* <div className="restaurant-menu-list-items-image">
                <button>Add</button>
                </div> */}

              <div className="grid grid-flow-row row-span-1 col-start-3 p-2 m-2 border-b-2 border-slate-200">
                {item?.cloudinaryImageId && (
                  <img
                    className="min-h-fit min-w-fit"
                    src={ITEM_IMG_CDN_URL + item?.cloudinaryImageId}
                    alt={item?.name}
                  />
                )}
                <button className=" w-min h-min bg-white bottom-0 left-auto right-auto" 
                  onClick={()=>(handleOnAddMenuItem(item))}> ADD </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
