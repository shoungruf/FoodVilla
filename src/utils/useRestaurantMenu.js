import { useEffect, useState } from "react";

const useRestaurantMenu =({resId}) =>{
    const [restaurants, setRestaurants] = useState(null);
    
    useEffect(()=>{
        getRestaurantsInfo();
    },[]);

    async function getRestaurantsInfo(){

        const dataObj = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=28.437997&lng=77.105066&menuId=" +
            resId );

        const jsonObj = await dataObj.json();

        setRestaurants(jsonObj?.data);

    }
    return restaurants;
};

export default useRestaurantMenu;