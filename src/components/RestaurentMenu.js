import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurentMenu = ()=>{

    const {resId} = useParams();
   
    
    const resInfo = useRestaurentMenu(resId);
   


    
    if(resInfo === null){
        return <Shimmer/>;
    }
    //console.log(resInfo?.data?.cards[2]?.card?.card?.info);
    const {name, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;


    const {itemCards} =resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[0] || resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

 
    // || resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card 
    //resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card || 
    console.log(resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR);
   
    //resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
 


    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{costForTwoMessage}</h3>
            <h2>menu</h2>
            <ol>
                {itemCards.map( (items) => <li key={items.card.info.id}> { items.card.info.name} - Rs.{items.card.info.price/100}/- </li>)}

                {/* traditional method of iterating through the list */}

                        {/* <li>{itemCards[0].card.info.name}</li>
                        <li>{itemCards[1].card.info.name}</li>
                        <li>{itemCards[2].card.info.name}</li>
                        <li>{itemCards[3].card.info.name}</li> */}

            </ol>
        </div>
    )
};

export default RestaurentMenu;