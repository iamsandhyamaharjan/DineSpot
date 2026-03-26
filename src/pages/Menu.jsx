import Footer from "../components/Footer";
import MenuList from "../components/MenuList";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";


export default function Menu() {
      const { restaurantId } = useParams();
        


    return (
    <div className=" flex flex-col min-h-screen">
    <Navbar/>
    <div className="flex-grow">
    <MenuList  restaurantId={restaurantId}/>
    </div>
    <Footer/>
    </div>)
}