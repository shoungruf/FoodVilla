import { IMG_CDN_URL } from "../utils/config";

import {useDispatch} from "react-redux";

const FoodItem = ({
    name, description, cloudinaryImageId, price
}) =>{
    const dispatch = useDispatch();
    const handleremoveItem=(value)=>{
        dispatch(removeItem(value))
    }

return (
    <>
        <div className="grid grid-flow-col p-5 m-5 ">
            <img className="col-start-1" src={IMG_CDN_URL + cloudinaryImageId}>
            </img>
            <div className="col-start-2 grid grid-flow-row p-2 m-2 ">
            <h2>{name}</h2>
            <h3>{description}</h3>
            
            </div>
            <h4 className="col-end-3 self-end">Rs {price/100}</h4>
            <button className="" onClick={(e)=>handleremoveItem(e.target)}> Remove </button>
        </div>

    </>
)
};

export default FoodItem;