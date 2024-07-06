import { useSelector } from "react-redux";
import ResCategoryList from "./ResCategoryList";
import { useDispatch } from "react-redux";
import {clearCart} from "../utils/cartSlice";
import PaymentInfo from "./PaymentInfo";
import { current } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
const Cart = ()=>{


    const list = useSelector((store)=>store.cart.items);
    const Dispatch = useDispatch();
    const clearItemsFunc = ()=>{
        Dispatch(clearCart());
    }
   
    //let sum = 0
    // const totalAmount = list.map((item)=> sum + item.cart.info.price/100)
    const amountList = list.map((item) => (item.card.info.price) ? item.card.info.price/100 : item.card.info.defaultPrice/100);
    const totalAmount = amountList.reduce((acc,current) => acc+current,0);
    //console.log(totalAmount);
   
    const paymentFunc = ()=>{
        <PaymentInfo/>
    }
    return(
        <div className="text-center p-3 m-3 mt-36">
            <h1 className="text-2xl font-bold">cart</h1>
            <button className="mt-5 bg-black font-bold text-white p-2 rounded-lg"
                    onClick={clearItemsFunc}>
                Clear Cart 
            </button>
            {list.length === 0 && <h3 className="m-10">your cart is empty, Add items to the cart.</h3>}
            <div className="w-12/12 md:w-6/12 m-auto ">
            <ResCategoryList items={list}/>
            {(list.length == 0 )? 
            (<div className="hidden flex justify-between py-6 p-2 border border-[#f1caa3] rounded-lg text-center items-center">
                <p className="font-bold text-[#f4a04c] md:text-lg">Grand Total - {totalAmount}</p>
                <button className="bg-white shadow-xl rounded-lg p-3 mr-7 transition-all text-green-600 font-bold text-lg hover:scale-105"
                      onClick={<PaymentInfo/>} > <Link to={"/payment"}>
                            Place order
                            </Link>
                </button>
            </div>):
            (<div className="mt-10 flex justify-between py-6 p-2 border border-[#f1caa3] rounded-lg text-center items-center">
                <p className="font-bold text-[#f4a04c] md:text-lg">Grand Total - {totalAmount}</p>
                <button className="bg-white shadow-xl rounded-lg p-3 mr-7 transition-all text-green-600 font-bold md:text-lg hover:scale-105"
                     > <Link to={"/payment"}>
                            Place order
                            </Link>
                </button>
            </div>)}
            </div>
        </div>
    );
}
export default Cart;    