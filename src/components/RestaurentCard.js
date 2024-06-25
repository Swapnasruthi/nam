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
        <div className="resto-cards">
           <img  className="resto-img" src={CDN_URL+ cloudinaryImageId}/>
           
           <div className="resto-info">
           <p className="resto-title" >{name}</p>
           <p><i class="fa-solid fa-star"></i>
           <span>{avgRating} •{(sla.deliveryTime-5) + "-"+(sla.deliveryTime)} mins </span></p>
           <p>{cuisines[0]+", "+cuisines[1]+",..."}</p>
           <p>{areaName}</p>

            </div>


        </div>
    )
}

export default RestraurentCards;