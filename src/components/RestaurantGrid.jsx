import RestaurantCard from "./RestaurantCard";


export default function RestaurantGrid({ restaurant }) {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Restaurants</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {restaurant?.map((restaurant, index) => (<RestaurantCard key={restaurant.restaurantID} restaurant={restaurant} />))}
            </div>
        </div>
    )
}