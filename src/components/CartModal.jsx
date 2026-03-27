import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart,closeCart, decreaseQuantity, increaseQuantity } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartModal({ isOpen, onClose }) {
    const cartItems = useSelector((state) => state.cart.items);
    const darkMode = useSelector((state) => state.theme.darkMode);
    const {items,isCartOpen} =useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const handlePayment = () => {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.itemPrice * item.quantity,
    0
  );

  const params = new URLSearchParams({
    amt: totalAmount,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: totalAmount,
    pid: "ORDER123", // unique order id
    scd: "EPAYTEST", // test merchant code
    su: "http://localhost:5173/success",
    fu: "http://localhost:5173/failure",
  });

  window.location.href = `https://uat.esewa.com.np/epay/main?${params}`;
};

    const totalAmount =cartItems.reduce((sum,item)=>sum+item.itemPrice * item.quantity,0)
    if (!isCartOpen) return null;
    return (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50"
>
            <div className={`bg-white dark:bg-gray-100 p-6  rounded-xl w-96 max-h-[80vh] overflow-y-auto shadow-lg relative`}>
                <button onClick={()=>dispatch(closeCart())} className="absolute top-2 right-2 text-gray-600 text-xl">
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-900"> Your Cart</h2>

                {cartItems.length === 0 ? (
                    <p className="text-gray-700 dark:text-gray-300"> Cart is Empty</p>) : (

                    <ul className="flex flex-col gap-3">
                        {cartItems.map(item => (
                            <li key={item.itemID} className="flex justify-between items-center p-2 rounded transition">
                                <div>
                                    <p className="font-semibold">{item.itemName}</p>
                                    <div  className="flex items-center gap-2 mt-1">
                                    <button className="px-2 bg-gray-200 rounded" onClick={()=>dispatch(decreaseQuantity(item.itemID))}>-</button>
                                    <p className="text-sm text-gray-600" >Qty:{item.quantity}</p>
                                    <button className="px-2 bg-gray-200 rounded" onClick={()=>dispatch(increaseQuantity(item.itemID))}>+</button>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className="font-bold">Rs.{item.itemPrice * item.quantity}</p>
                                    <button onClick={()=>dispatch(removeFromCart(item.itemID))} className="text-red-500 hover:text-red-700">&times;</button>
                                </div>
                            </li>
                        ))}

                    </ul>
                )}
                {cartItems.length > 0 && (
                    <div className="mt-4 border-t pt-4">
                        <div className="flex justify-between font-bold text-lg mb-3">
                            <span>Total:</span>
                            <span>Rs.{totalAmount}</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <button onClick={()=>{
                                    dispatch(closeCart())
                                    navigate(`/navigate/${totalAmount}/${cartItems.id}`)}
                                    } className="w-full py-2 bg-gray-500 text-white rounded hover:bg-green-600">Pay Now</button>

                <button onClick={() => dispatch(clearCart())} className="mt-4 w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Clear Cart</button>
                </div>
                </div>
                )}


            </div>

        </div>
    )
}