import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import Home from "./pages/Home"
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CartModal from "./components/CartModal";
import Checkout from "./components/Checkout";
import EsewaForm from "./components/Esewa";


function App(){
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/menu/:restaurantId" element={  <Menu/>}/>
  <Route path="/cart" element={  <Cart/>}/>
  <Route path="/login" element={  <Login/>}/>
  <Route path="/signup" element={  <Signup/>}/>
  <Route path="/navigate/:amount/:productId" element={  <EsewaForm/>}/>
  </Routes>
  <CartModal/>
  </BrowserRouter>)
}

export default App;