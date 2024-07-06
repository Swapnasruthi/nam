import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ResCategoryList = ({items}) =>{
    
    const Dispatch = useDispatch();
    const clickFuntion = (item)=>{
        Dispatch(addItem(item));
      
    }

    return (
        <div className="my-2 ">
            {items.map((item) => ( 
            <div className="w-10/12 m-auto flex flex-col md:flex-row justify-between border-solid border-b-2 items-center">
                <div key={item.card.info.id} className="w-10/12 md:w-8/12 flex flex-col justify-center py-10 text-left my-8">
                    <div className="flex flex-col w-10/12">
                    
                        <span className="font-bold text-lg text-gray-700">{item.card.info.name}</span>
                        <span className="font-bold text-lg">₹{(item.card.info.price) ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        {/* <span className="font-bold">★<span className="text-green-600">{item.card.info.ratings.aggregatedRating.rating}</span> ({item.card.info.ratings.aggregatedRating.ratingCountV2})</span> */}
                    </div>
                        <p className="w-full md:w-12/12 mt-8">{item.card.info.description}</p>
                </div>
                <div className="3/12">
                    <img src={CDN_URL + item.card.info.imageId} alt="image is not available" className="relative z-0 w-52 h-40 rounded-2xl mb-5"/>
                    <button className="absolute flex w-32 h-[2.9rem] text-center p-2 ml-10 mt-[-2rem] justify-center rounded-xl bg-white z-10 text-green-600 font-extrabold text-xl shadow-xl hover:bg-gray-200"
                        onClick={()=>clickFuntion(item)}>
                            ADD
                            </button>
                </div>
            </div>
            ))}
        </div>
    );
}

export default ResCategoryList;