import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import ShimmerComponent from "../utils/Shimmer";
import {MdCancel} from "react-icons/md";
import {BiSearchAlt} from "react-icons/bi"
import { Link } from "react-router-dom";
import ThemeContext from "../utils/useThemeContext";

const Body =() => {
    
    const [searchText, setSearchText] = useState();

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurantCard, setFilteredRestaurantCard] = useState([]);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    useEffect(()=>{
        getRestaurantCards();
    },[]);

    async function getRestaurantCards(){
        const dataObj = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        const jsonObj = await dataObj.json();

        setAllRestaurants(jsonObj?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurantCard(jsonObj?.data?.cards[2]?.data?.data?.cards);
    }
    
    function filterRestaurantData(searchData, restaurant){
        return restaurant.filter((rest) =>{
                return rest?.data?.name.toLowerCase()?.includes(searchData?.toLowerCase());
        });
    }

    // conditional rendering 
    return allRestaurants.length === 0 ? (<ShimmerComponent />) : 
        
    (
        <>
        {/* // this passes the props to restaurant card functional component  */}
        
        <div className="p-5 m-2 flex shadow-slate-300 shadow-sm bg-neutral-100 focus:bg-neutral-400 ">
            <input type="text" 
                   className="flex place-items-center w-11/12 rounded-md"
                    placeholder="Search" 
                    value={searchText} 
                    onChange = {(e)=>{
                        setSearchText(e.target.value);
                        console.log(e.target.value);}}/>
            
            <MdCancel className="p-0.5 m-0.5" style={{'visibility': (searchText?.length > 0) ? 'visible' : 'hidden'}} 
                
                                onClick={() => {  setSearchText(''); setfilteredRestaurants(allRestaurants)
                         }}/> 
                         
            <BiSearchAlt className="cursor-pointer bg-slate-300 min-h-full" 
                    onKeyPress={(e)=>{
                        if(e.key === "Enter"){
                        var searchData = filterRestaurantData(searchText, allRestaurants);
                       
                        setfilteredRestaurants(searchData);
                        }
                    }
                    }
                    onClick={()=>{
                        var searchData = filterRestaurantData(searchText, allRestaurants);
                       
                        setfilteredRestaurants(searchData);
                        
                        
                       }
                    }
                />

                    
        </div>
        {darkMode ? (
            <>
             <div className="flex flex-wrap bg-slate-700 " >
       

       {

     //  put the useState variable
     filteredRestaurantCard.map((items)=> {   
         
          return (
              <Link to ={"/restaurant/" + items.data.id} key={items.data.id} className="p-1 m-1">     
           <RestaurantCard {...items.data} />
           </Link>   
          // {here the key is unique to avoid rerendering of entire loop of data  }
          )  
       })
  }

  </div>
            </>
        ) : (
            <>
             <div className="flex flex-wrap bg-red-50" >
       

       {

     //  put the useState variable
     filteredRestaurantCard.map((items)=> {   
         
          return (
              <Link to ={"/restaurant/" + items.data.id} key={items.data.id} className="p-1 m-1">     
           <RestaurantCard {...items.data} />
           </Link>   
          // {here the key is unique to avoid rerendering of entire loop of data  }
          )  
       })
  }

  </div>
            </>
        ) }
     
        </>
    )
};

export default Body;