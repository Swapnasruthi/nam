import RestraurentCards from "./RestaurentCard";
import restData from "../utils/mockdata";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
    const [listOfRestaurent, setListOfRestaurent] = useState([]);

    useEffect(()=>{
       fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.44941225066375&lng=78.383892888085"
        );
        const json = await data.json();
        // console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
        // console.log(json);
        // console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
       setListOfRestaurent(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);

    }

    if(listOfRestaurent.length === 0){
        return <Shimmer/>;
    }

    return (
        
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 

                    //by using a normal js variable.

                    // onClick={ () => {
                    //     listOfRest = listOfRest.filter(
                    //         (res) => res.data.avgRating > 4
                    //     );
                    //     console.log(listOfRest);
                    // }} 

                    //By using a state variable function.
                    
                    onClick={ () => {
                        const filterdRest = listOfRestaurent.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurent(filterdRest);
                    }} 


                    >
                
               
                    Top Rated Restaurant
                </button>
            </div>
                <div className="rest-container">
                   {
                    listOfRestaurent.map((restaurant) =>
                    (
                        <RestraurentCards key={restaurant.info.id} restObj={restaurant}/>
                    ))
                   }
            </div>
        </div>
    )
}

export default Body;


