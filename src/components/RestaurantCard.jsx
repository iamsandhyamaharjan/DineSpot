import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

export default function RestaurantCard({ restaurant }) {
    const navigate =useNavigate();
    const darkMode = useSelector((state) => state.theme.darkMode);
    const handleMenu = () =>{
        navigate(`/menu/${restaurant.restaurantID}`)
    }
    return (
        <div className={`p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300 flex flex-col justify-between h-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            <div className="text-4xl text-center mb-2">{restaurant.restaurantName}</div>
            <h2 className="text-lg font-bold font-display text-center">
                <span className="mx-2"><i class="fa-solid fa-location-dot"></i></span>
                {restaurant.address}</h2>
            <p className="text-center mt-1">{restaurant.type}</p>
            <p className="text-center mt-1 "><span className="mx-2"><i class="fa-brands fa-pagelines"></i></span>{restaurant.parkingLot ? "Parking Available" : "No Parking"}</p>
            <button className={`mt-3 w-full py-2 rounded-md transition bg-gray-100 cursor-pointer ${darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`} onClick={handleMenu}>View Menu</button>
        </div>
    )
}