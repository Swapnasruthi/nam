import useRestaurentMenu from "../utils/useRestaurentMenu";
import React, {useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurentCategory from "./RestaurentCategory";
import { CDN_URL } from "../utils/constants";
const RestaurentMenu = ()=>{

    const {resId} = useParams();
   
    
    const resInfo = useRestaurentMenu(resId);
   
    const [showIndex, setShowIndex] = useState(null);

    console.log("vas",resId);
    if(resInfo === null){
        return <Shimmer/>;
    }
    //console.log(resInfo?.data?.cards[2]?.card?.card?.info);
    const {name, costForTwoMessage,cuisines,avgRating,cloudinaryImageId} = resInfo?.data?.cards[2]?.card?.card?.info; 

    const {minDeliveryTime, maxDeliveryTime} = resInfo?.data?.cards[2]?.card?.card?.info?.sla;
    //console.log(resInfo?.data?.cards[2]?.card?.card?.info);

    // const {itemCards} =resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[0] || resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

 
    // || resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card 
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    //console.log(categories);
   
    const nestedCategories  = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");

   
    //resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
 


    return(
        <div className=" mt-20">
            <div className="bg-black py-2 mb-10 md:flex md:w-6/12 m-auto">
                <img className="ml-5 mt-5 mb-3 w-60 h-40 rounded-lg" src={CDN_URL + cloudinaryImageId} alt="image is not available"/>
                <div className="md:flex md:flex-col md:justify-around">
                <h1 className="text-white text-2xl ml-5 mb-1 md:mt-10 md:mb-0">{name}</h1>
                <h3 className="text-gray-400 ml-5 md:mt-1 ">{cuisines }</h3>
                <div className="mt-5 mb-6  ">
                    {(avgRating >= 4) ?
                        (<span className="bg-[#117145] p-2 px-3 rounded-lg text-white ml-5"> <i class="fa-solid fa-star pr-1"></i>{avgRating}</span>) :
                        (<span className="bg-[#ffaf60] p-2 px-3 rounded-lg m-5 mb-8"> <i class="fa-solid fa-star"></i>{avgRating}</span>)}

                        <span className="ml-1 text-white font-semibold"> | {minDeliveryTime}-{maxDeliveryTime} MINS</span>
                        <span className="ml-1 text-white font-semibold"> | {costForTwoMessage}</span>
                </div>
                </div>
            </div>
            {/* categories accordian*/}
            <div>
            {categories.map((category, index)=>(
                <RestaurentCategory 
                    key={category?.card?.card.title}
                    data={category?.card?.card} 
                    showItems = {index == showIndex ? true :null}
                    setShowIndex = {()=>setShowIndex(prev => prev==index ? null : index)}
                    />
                ))}
            </div>
        </div>
    )
};

export default RestaurentMenu;