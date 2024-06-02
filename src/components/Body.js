import RestraurentCards from "./RestaurentCard";
import restData from "../utils/mockdata";
import {useState} from "react";

const Body = ()=>{
    const [listOfRestaurent, setListOfRestaurent] = useState(restData);

    // let listOfRest = [ 
    // {
    //     type: 'restaurant',
    //     data: {
    //       type: 'F',
    //       id: '121603',
    //       name: 'Kannur Food Point',
    //       uuid: '51983905-e698-4e31-b0d7-e376eca56320',
    //       city: '1',
    //       area: 'Tavarekere',
    //       totalRatingsString: '10000+ ratings',
    //       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
    //       cuisines: ['Kerala', 'Chinese'],
    //       tags: [],
    //       costForTwo: 30000,
    //       costForTwoString: '₹300 FOR TWO',
    //       deliveryTime: 24,
    //       minDeliveryTime: 24,
    //       maxDeliveryTime: 24,
    //       slaString: '24 MINS',
    //       lastMileTravel: 3,
    //       avgRating: '3.9',
    //       }
    // },
    // {
    //     type: 'restaurant',
    //     data: {
    //       type: 'F',
    //       id: '121604',
    //       name: 'Kannur Food Point',
    //       uuid: '51983905-e698-4e31-b0d7-e376eca56320',
    //       city: '1',
    //       area: 'Tavarekere',
    //       totalRatingsString: '10000+ ratings',
    //       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
    //       cuisines: ['Kerala', 'Chinese'],
    //       tags: [],
    //       costForTwo: 30000,
    //       costForTwoString: '₹300 FOR TWO',
    //       deliveryTime: 24,
    //       minDeliveryTime: 24,
    //       maxDeliveryTime: 24,
    //       slaString: '24 MINS',
    //       lastMileTravel: 3,
    //       avgRating: '4.9',
          
    //       }
    // }
    // ];

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
                            (res) => res.data.avgRating > 4
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
                        <RestraurentCards key={restaurant.data.id} restObj={restaurant}/>
                    ))
                   }
            </div>
        </div>
    )
}

export default Body;