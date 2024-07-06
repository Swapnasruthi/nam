import { useDispatch } from "react-redux";
import { addAmount } from "../utils/cartSlice";
import { useSelector } from "react-redux";
const PaymentInfo = ()=> {

    
    return (
        <div className="w-10/12 m-auto mt-80 md:mt-72 md:w-4/12 text-center">
            <div className="border border-green-300 p-3 rounded-lg py-10">
                {/* <h1 className="mr-10 my-2 font-bold">Payment Information:  </h1> */}
                <h2 className="text-green-600 font-bold">your order is placed successfully</h2>
                <h2>Thank you!</h2>
            </div>
           
        </div>
    );
}
export default PaymentInfo;