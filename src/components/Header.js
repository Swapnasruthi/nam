import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header= ()=>{
    const [btnName,setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    return( 
     <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-options">
                <ul>
                    <li>
                        Online Status : {onlineStatus? "✅" :"🔴"}
                    </li>
                    <li>
                        <Link to="/" style={{ textDecoration: 'none', color:"black" }}> Home </Link>
                    </li>
                    <li>
                        <Link  to="/contact" style={{ textDecoration: 'none', color:"black" }}> Contact Us </Link>
                      
                    </li>
                    <li>
                        <Link to="/about" style={{ textDecoration: 'none', color:"black" }}> About Us </Link>
                    </li>
                    <li>
                        <Link to="/glocery" style={{ textDecoration: 'none', color:"black" }}> Glocery </Link>
                    </li>
                    <li>
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