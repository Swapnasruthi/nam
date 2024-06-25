import RestraurentCards from "./RestaurentCard";
import restData from "../utils/mockdata";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = ()=>{
    const [listOfRestaurent, setListOfRestaurent] = useState([]); //this is for storing all the cards (whenever i need to filter something, i'll use this variable)
    const [filteringRestaurent, setFilteringRestaurent] = useState([]); //this is for displaying the changes in the UI. it also contains the cards. but, changes will be undergoes in this variable.
   
    const [inputValue,setInputValue] = useState(""); //this is for tracking our input box.

    useEffect(()=>{
       fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.44941225066375&lng=78.383892888085"
        );
        const json = await data.json();
        //console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
        //console.log(json);
        // console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
       
        //optional chaining.
        setListOfRestaurent(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilteringRestaurent(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }
    //conditional rendering.
    if(listOfRestaurent.length === 0){
        return <Shimmer/>;
    }

    return (
        
        <div className="body">
            <div className="filter">
                <input 
                    type="text"
                    className="input-box"
                    value={inputValue}
                    //tracking the input value using the onchange function.
                    onChange={(e)=>{
                        setInputValue(e.target.value);
                    }}
                />
                <button 
                    className="input_submit"
                    onClick={()=>{
                            const inputFilter = listOfRestaurent.filter((res)=>res.info.name.toLowerCase().includes(inputValue));
                            setFilteringRestaurent(inputFilter);
                            console.log(inputValue);
                       }} >
                   
                    submit
                </button>
                <button 
                    className="filter-btn" 
                    onClick={ () => {
                        const filterdRest = listOfRestaurent.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteringRestaurent(filterdRest);
                        // console.log("clicked");
                    }} 
                    > 
                    Rated Restaurant
                </button>
            </div>
                <div className="rest-container">
                   {
                    filteringRestaurent.map((restaurant) =>
                    (
                       <Link to={"restaurents/"+restaurant.info.id} style={{ textDecoration: 'none', color:"black" }}> <RestraurentCards key={restaurant.info.id} restObj={restaurant}/> </Link>
                    ))
                   }
            </div>
        </div>
    )
}

export default Body;


