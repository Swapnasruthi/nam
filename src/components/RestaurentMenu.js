import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURENT_MENU } from "../utils/constants";
const RestaurentMenu = ()=>{

    const resId = useParams();
    //console.log(resId.resId);
    
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        menu_fetch()
    },[]);

    //fetching the API data using an API call. 
    const menu_fetch = async()=>{
        const data = await fetch(
            RESTAURENT_MENU + resId.resId
            );
            const json = await data.json();
            //console.log(json);
            //console.log(json.data.cards[2].card.card.info.name);
            setResInfo(json);
    };
    
    if(resInfo === null){
        return <Shimmer/>;
    }
   
    const {name, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
    //const costForTwoMessage = resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage;

    const {itemCards} = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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