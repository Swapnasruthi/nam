import { useSelector } from "react-redux";
import ResCategoryList from "./ResCategoryList";
import { useDispatch } from "react-redux";
import {clearCart} from "../utils/cartSlice";
const Cart = ()=>{


    const list = useSelector((store)=>store.cart.items);
    const Dispatch = useDispatch();
    const clearItemsFunc = ()=>{
        Dispatch(clearCart());
    }

    return(
        <div className="text-center p-3 m-3 mt-36 ">
            <h1 className="text-2xl font-bold">cart</h1>
            <button className="mt-5 bg-black font-bold text-white p-2 rounded-lg"
                    onClick={clearItemsFunc}>
                Clear Cart 
            </button>
            {list.length === 0 && <h3 className="m-10">your cart is empty, Add items to the cart.</h3>}
            <div className="w-6/12 m-auto">
            <ResCategoryList items={list}/>
            </div>
        </div>
    );
}
export default Cart;    