import restData from "../utils/mockdata";
import { CDN_URL } from "../utils/constants";

const RestraurentCards = (props)=>{
    const {restObj} = props;
    const {
        name,
        avgRating,
        deliveryTime,
        cuisines,
        area,
        cloudinaryImageId
    } = restObj?.data
    return(
        <div className="resto-cards">
           <img  className="resto-img" src={CDN_URL+ cloudinaryImageId}/>
           
           <div className="resto-info">
           <p className="resto-title">{name}</p>
           <p><i class="fa-solid fa-star"></i>
           <span>{avgRating} •{(deliveryTime-5) + "-"+deliveryTime} mins </span></p>
           <p>{cuisines[0]+", "+cuisines[1]+",..."}</p>
           <p>{area}</p>

            </div>


        </div>
    )
}

export default RestraurentCards;