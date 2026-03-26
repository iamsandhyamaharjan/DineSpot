
import RestaurantGrid from "../components/RestaurantGrid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar.jsx";
import { useState, useEffect } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurant] = useState([]);

  useEffect(() => {
    fetch('/api/Restaurant')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setRestaurant(json)

      })


  }, [])


  const filterdRestaurants = restaurants.filter((restaurant) => restaurant.restaurantName.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="flex-grow">
        <RestaurantGrid restaurant={filterdRestaurants} />
      </div>
      <Footer />
    </div>
  );
}