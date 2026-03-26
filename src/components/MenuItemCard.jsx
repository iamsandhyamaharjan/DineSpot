import { useSelector, useDispatch } from "react-redux";
import { addToCart,openCart } from "../store/cartSlice";
import { useState } from "react";

export default function MenuItemCard({ item }) {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch =useDispatch();
    const [modalOpen,setModalOpen]=useState(false);

    const handleAddToCart =()=>{
        console.log(addToCart);
        dispatch(addToCart(item));
        dispatch(openCart(item));
        setModalOpen(true);
    }
    return (
        <>
        <div className={`flex flex-row md:flex-row relative shadow-md p-4 m-4 rounded-lg overflow-hidden hover:shadow-xl transition-shadow ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            <img 
            src={item.imageUrl} 
            alt={item.itemName}
            className="w-full md:w-40 h-40 object-cover rounded-lg"
            
            />
            <div className="p-4 flex-1">
                <h2 className="text-xl font-semibold">{item.itemName}</h2>
                <p className={`${darkMode ? "text-gray-100":"text-gray-900"} mt-2`}>{item.itemDescription}</p>
                <p className="text-lg font-bold mt-3">Rs.{item.itemPrice}</p>
                <button 
                onClick={handleAddToCart}
                className={`text-sm rounded-lg absolute right-4 top-1 ${!darkMode ? "bg-gray-900 text-white":"bg-gray-100 text-black"} p-4 items-center justify-center cursor-pointer hover:shadow-xl transition-shadow`}><i class="fa-solid fa-cart-arrow-down"></i></button>
            </div>
        </div>
        {/* <CartModal isOpen={modalOpen} onClose={()=>setModalOpen(false)}/> */}
        </>
    )
}