import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { useNavigate } from "react-router-dom"
import { openCart } from "../store/cartSlice";



export default function Navbar() {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    // const [cartCount, setCartCount] = useState(1);
    const handleLogin = () =>{
        navigate(`/login`)
    }
    return (
        <div className={`flex justify-between items-center p-4 shadow-md bg-gray-100 nav rounded-md ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            <h1 className="text-2xl font-bold font-display"><span className="mx-2"><i class="fa-regular fa-building"></i></span>
                DineSpot
            </h1>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => dispatch(toggleTheme())}
                    className="text-xl cursor-pointer">

                    {darkMode ? (
                        <i className="fa-solid fa-sun"></i>
                    ) : (
                        <i className="fa-solid fa-moon"></i>
                    )}
                </button>
                <div className="" onClick={handleLogin}><i className="fa-solid fa-user"></i>
</div>
                <div className="relative cursor-pointer" onClick={()=>dispatch(openCart())}>
                    <i class="fa-solid fa-cart-arrow-down"></i>
                    {totalQuantity > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs px-1 rounded-full">{totalQuantity}</span>

                    )}
                </div>
            </div>
        </div>
    )
}