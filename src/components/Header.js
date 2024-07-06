import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Header= ()=>{

    const [btnName,setBtnName] = useState("login"); 

    const onlineStatus = useOnlineStatus();
    const data = useContext(userContext);
 
    //this is subcribing the whole store...and mostly not preferred
    // const cartItems = useSelector((store)=>store);
    // console.log(cartItems.cart.Items);
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return( 
     <div className="fixed top-0 left-0 z-50 overflow-hidden  text-sm flex justify-between shadow-xl w-full bg-white h-20">
        
            <div className="logo-container">
                <img className="logo w-20 h-20 md:w-24 md:h-24" src={LOGO_URL}/>
            </div>

            <div className="flex items-center justify-center">
                <ul className="flex justify-center p-2 mr-1 ">
                    {/* <li className="mr-5 text-gray-700 ">
                        Online Status : {onlineStatus? "✅" :"🔴"}
                    </li> */}
                    <li className="mr-5 font-bold text-xs md:text-base">
                        <Link to="/" className="text-gray-700 "> Home </Link>
                    </li>
                    <li className="mr-5 font-bold text-xs md:text-base">
                        <Link  to="/contact" className="text-gray-700"> Contact Us </Link>
                      
                    </li>
                    {/* <li className="mr-5  text-lg">
                        <Link to="/about" style={{ textDecoration: 'none', color:"black" }}> About Us </Link>
                    </li> */}
                    {/* <li className="mr-5  text-lg">
                        <Link to="/glocery" style={{ textDecoration: 'none', color:"black" }}> Glocery </Link>
                    </li> */}
                    <li className="mr-5 font-bold text-xs md:text-base">
                        <Link to="./cart" className="text-xs text-gray-700 md:text-base">
                        <span className="text-xs md:text-base">Cart</span> 
                        {cartItems.length > 0 ? <i class="fa-solid fa-cart-shopping text-[#c26100]"></i> :
                        <i class="fa-solid fa-cart-shopping"></i>}
                        {/* ({cartItems.length} items) */}
                        </Link>
                    </li>
                    <button className="login font-bold text-gray-700 text-xs md:text-base"
                    onClick={()=> {
                        (btnName === "login")?
                        setBtnName("logout"):
                        setBtnName("login");
                    }}
                    >{btnName+" "} </button>
                    {/* <li className="ml-5 mr-2 font-bold text-lg">
                        {data.loggedUserId}
                    </li> */}
                </ul>
            </div>
            </div>
        
    )
};

export default Header;