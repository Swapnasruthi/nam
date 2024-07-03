import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";

export const Header= ()=>{
    const [btnName,setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(userContext);
    console.log(data);

    return( 
     <div className="flex justify-between shadow-xl mb-10 h-28">
            <div className="logo-container">
                <img className="logo w-28 h-28" src={LOGO_URL}/>
            </div>

            <div className="flex items-center">
                <ul className="flex p-5 mr-5">
                    <li className="mr-5  text-lg">
                        Online Status : {onlineStatus? "✅" :"🔴"}
                    </li>
                    <li className="mr-5  text-lg">
                        <Link to="/" style={{ textDecoration: 'none', color:"black" }}> Home </Link>
                    </li>
                    <li className="mr-5  text-lg">
                        <Link  to="/contact" style={{ textDecoration: 'none', color:"black" }}> Contact Us </Link>
                      
                    </li>
                    <li className="mr-5  text-lg">
                        <Link to="/about" style={{ textDecoration: 'none', color:"black" }}> About Us </Link>
                    </li>
                    <li className="mr-5  text-lg">
                        <Link to="/glocery" style={{ textDecoration: 'none', color:"black" }}> Glocery </Link>
                    </li>
                    <li className="mr-5  text-lg">
                        Cart
                    </li>
                    <button className="login  text-lg" 
                    onClick={()=> {
                        (btnName === "login")?
                        setBtnName("logout "):
                        setBtnName("login ");
                    }}
                    >{btnName+" "} </button>
                    <li className="ml-5 mr-2 font-bold text-lg">
                        {data.loggedUserId}
                    </li>
                </ul>
            </div>
            </div>
        
    )
};

export default Header;