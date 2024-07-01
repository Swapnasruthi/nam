import { RESTAURENT_MENU } from "../utils/constants";
import { useState,useEffect } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{

        const data = await fetch(RESTAURENT_MENU + resId);
        const json = await data.json();
        setResInfo(json);

    }
    return resInfo;
}
export default useRestaurantMenu;