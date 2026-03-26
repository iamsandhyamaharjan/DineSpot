import { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard"
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import { useSelector, useDispatch } from "react-redux";





export default function MenuList({ restaurantId }) {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch(`https://fakerestaurantapi.runasp.net/api/Restaurant/${restaurantId}/menu`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setMenuItems(json);
                setLoading(false);
            })
    }, [restaurantId])

    if (loading) return <Loading/>

    const filtereditem = menuItems.filter((menuItem) => menuItem.itemName.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <SearchBar search={search} setSearch={setSearch} placeholder="Food" />
            <div className="flex justify-center gap-4">

                {filtereditem.map((item, index) => (

                    <MenuItemCard key={index} item={item} />
                ))}
            </div>
        </>
    )
}