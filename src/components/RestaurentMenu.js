import useRestaurentMenu from "../utils/useRestaurentMenu";
import React, {useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = ()=>{

    const {resId} = useParams();
   
    
    const resInfo = useRestaurentMenu(resId);
   
    const [showIndex, setShowIndex] = useState(null);

    console.log("vas",resId);
    if(resInfo === null){
        return <Shimmer/>;
    }
    //console.log(resInfo?.data?.cards[2]?.card?.card?.info);
    const {name, costForTwoMessage,cuisines} = resInfo?.data?.cards[2]?.card?.card?.info; 

    //console.log(resInfo?.data?.cards[2]?.card?.card?.info);

    // const {itemCards} =resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[0] || resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

 
    // || resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card 
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    //console.log(categories);
   
    const nestedCategories  = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");

   
    //resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
 


    return(
        <div className="text-center mt-40">
            <h1 className="font-bold text-2xl  mb-5">{name}</h1>
            <h3 className="font-bold text-lg text-gray-600 mb-10">{cuisines +" - "+ costForTwoMessage}</h3>
         
            {/* categories accordian*/}
            {categories.map((category, index)=>(
                <RestaurentCategory 
                    key={category?.card?.card.title}
                    data={category?.card?.card} 
                    showItems = {index == showIndex ? true :null}
                    setShowIndex = {()=>setShowIndex(prev => prev==index ? null : index)}
                    />
                ))}
        </div>
    )
};

export default RestaurentMenu;