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
        <div className="p-3 mt-5 mb-5 ml-6 mr-2 w-[260px] h-[325px] transition-all hover:scale-110">
           <img  className="rounded-xl h-[200] w-[250px]" src={CDN_URL+ cloudinaryImageId}/>
           
           <div className="resto-info ">
           <p className="font-bold py-5" >{name}</p>
           <p><i class="fa-solid fa-star"></i>
           <span>{avgRating} •{(sla.deliveryTime-5) + "-"+(sla.deliveryTime)} mins </span></p>
           <p>{cuisines[0]+", "+cuisines[1]+",..."}</p>
           <p>{areaName}</p>

            </div>


        </div>
    )
}

export default RestraurentCards;