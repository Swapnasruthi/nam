import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header= ()=>{
    const [btnName,setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();


    return( 
     <div className="flex justify-between bg-pink-100 shadow-xl m-2">
            <div className="logo-container">
                <img className="logo w-28 h-20" src={LOGO_URL}/>
            </div>

            <div className="flex items-center">
                <ul className="flex p-5 mr-5">
                    <li className="mr-10">
                        Online Status : {onlineStatus? "✅" :"🔴"}
                    </li>
                    <li className="mr-10">
                        <Link to="/" style={{ textDecoration: 'none', color:"black" }}> Home </Link>
                    </li>
                    <li className="mr-10">
                        <Link  to="/contact" style={{ textDecoration: 'none', color:"black" }}> Contact Us </Link>
                      
                    </li>
                    <li className="mr-10">
                        <Link to="/about" style={{ textDecoration: 'none', color:"black" }}> About Us </Link>
                    </li>
                    <li className="mr-10">
                        <Link to="/glocery" style={{ textDecoration: 'none', color:"black" }}> Glocery </Link>
                    </li>
                    <li className="mr-10">
                        Cart
                    </li>
                    <button className="login" 
                    onClick={()=> {
                        (btnName === "login")?
                        setBtnName("logout"):
                        setBtnName("login");
                    }}
                    >{btnName}</button>
                </ul>
            </div>
            </div>
        
    )
};

export default Header;