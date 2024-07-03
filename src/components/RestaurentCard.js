import restData from "../utils/mockdata";
import { CDN_URL } from "../utils/constants";

const RestraurentCards = (props)=>{
    const {restObj} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        sla,
        cuisines,
        areaName
    } = restObj?.info
    return(
        <div className="p-3 m-4 w-[260px] rounded-lg transition-all hover:bg-gray-300 hover:shadow-2xl">
           <img  className="rounded-xl h-[200] w-[250px]" src={CDN_URL+ cloudinaryImageId}/>
           
           <div className="resto-info ">
           <p className="font-bold py-2" >{name}</p>
           <p><i class="fa-solid fa-star"></i>
           <span>{avgRating} •{(sla.deliveryTime-5) + "-"+(sla.deliveryTime)} mins </span></p>
           <p>{cuisines[0]+", "+cuisines[1]+",..."}</p>
           <p>{areaName}</p>

            </div>


        </div>
    )
};

export const withOfferTag = (RestraurentCards) => {
    return (props)  => {
        const restData = props;
     
        return (
            <div>
                <div className="absolute p-2 ml-6 mt-44 hover:scale-105 hover:shadow-2xl"><h2 className="text-center w-56 rounded-xl font-extrabold text-white text-xl overflow-hidden bg-black">{restData.restObj.info.aggregatedDiscountInfoV3.header + " " + restData.restObj.info.aggregatedDiscountInfoV3.subHeader}</h2></div>
                <RestraurentCards {...props}/>
            </div>
        )
    }
}

export default RestraurentCards;