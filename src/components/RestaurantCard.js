import { IMG_CDN_URL } from "../utils/config";
import { AiFillStar } from "react-icons/ai";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  
  return (
    <div className="relative flex-wrap m-1.5 p-1.5 shadow-sm shadow-slate-700 w-56 min-h-full  bg-white">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-1"> {name}</h3>
      <div className="break-words py-1 text-sm text-gray-700">
        <h4>{cuisines.join(",")}</h4>
      </div>
      <span
        className="flex justify-center shadow-sm shadow-slate-700 w-10 absolute top-0 left-0 p-1 m-1"
        style={{
          background:
            +avgRating > 3.5
              ? "#48c479"
              : +avgRating > 2.5
              ? "#db7c38"
              : +avgRating > 0
              ? "red"
              : "grey",
        }}
      >
        <AiFillStar />
        <h4>{avgRating}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
