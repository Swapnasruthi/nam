import RestraurentCards, {withOfferTag} from "./RestaurentCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useEffect, useState, useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import userContext from "../utils/UserContext";
import { SWIGGY_API } from "../utils/constants";
import Footer from "./Footer";
const Body = ()=>{
    const [listOfRestaurent, setListOfRestaurent] = useState([]); //this is for storing all the cards (whenever i need to filter something, i'll use this variable)
    const [filteringRestaurent, setFilteringRestaurent] = useState([]); //this is for displaying the changes in the UI. it also contains the cards. but, changes will be undergoes in this variable.
   
    const [inputValue,setInputValue] = useState(""); //this is for tracking our input box.

    const RestaurentOfferCards = withOfferTag(RestraurentCards);

    useEffect(()=>{
    //console.log(`${process.env.REACT_FOODFIRE_APP_BASE_URL}restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING`);
       fetchData();
    },[]);

    const {loggedUserId, setUserName} = useContext(userContext);
    const fetchData = async ()=>{
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      
        const json = await data.json();
        //console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
        // console.log("swap",json);
        // console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
        function checkJsonData(json) {
            for (let i = 0; i < json?.data?.cards.length; i++) {
              // initialize checkData for Swiggy Restaurant data
              let checkData =
                json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                  ?.restaurants;
  
              // if checkData is not undefined then return it
              if (checkData !== undefined) {
                return checkData;
              }
            }
          }
  
          // call the checkJsonData() function which return Swiggy Restaurant data
          const resData = checkJsonData(json);
        //optional chaining.
       
        // setListOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteringRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        setListOfRestaurent(resData);
        setFilteringRestaurent(resData);

    }


    const onlineStatus = useOnlineStatus();
    if (onlineStatus == false){
        return <h1>Looks like you're offline, check your Internet Connection!</h1>
    }
    
    //conditional rendering.
    if(listOfRestaurent.length === 0){
        return <Shimmer/>;
    }

   
    
    return (
        
        <div className="body w-full m-auto">
            <div className="mt-24 filter p-5 flex items-center justify-center">
                <div className="flex justify-center w-full items-center text-center m-auto">
                <input 
                    type="text"
                    placeholder="Search a restaurent you want.."
                    className="p-2 w-[30rem] border rounded-l-md border-[#aabcca] box-border border-r-0 shadow-xl outline-none focus:border-[#c26100]"
                    value={inputValue}
                    //tracking the input value using the onchange function.
                    onChange={(e)=>{
                        setInputValue(e.target.value);
                    }}
                />
                <button 
                    className="px-4 py-[0.6rem] text-white bg-[#c26100] rounded-r-md border-none outline-none box-border shadow-xl ml-[-4px] hover:bg-[#016034]"
                    onClick={()=>{
                            const inputFilter = listOfRestaurent.filter((res)=>res.info.name.toLowerCase().includes(inputValue));
                            setFilteringRestaurent(inputFilter);
                            console.log(inputValue);
                       }} >
                   
                    search
                </button>
                </div>
                {/* <button 
                    className="px-4 py-0.5 m-2 bg-gray-300 rounded-lg" 
                    onClick={ () => {
                        const filterdRest = listOfRestaurent.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteringRestaurent(filterdRest);
                        // console.log("clicked");
                    }} 
                    > 
                    Rated Restaurant
                </button> */}
                {/* <label className="font-bold">User Name:</label>
                <input 
                    
                    type="text"
                    className="m-1 p-1 border border-black h-8 w-72"
                    value={loggedUserId}
                    onChange={(e)=>setUserName(e.target.value)}
                
                /> */}
            </div>
                <div className="flex flex-wrap justify-center">
                   {
                    filteringRestaurent.map((restaurant) =>
                    
                    (
                       <Link to={"restaurents/"+restaurant.info.id} style={{ textDecoration: 'none', color:"black" }}> 

                       {
                       
                       restaurant.info.aggregatedDiscountInfoV3 ? 
                       (<RestaurentOfferCards restObj={restaurant} />) : 
                       
                       (<RestraurentCards key={restaurant.info.id} restObj={restaurant}/>) }

                       </Link>
                    ))
                   }
            </div>
            <div>
            <Footer/>
            </div>
        </div>
        
    )
}

export default Body;


