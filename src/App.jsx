import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./Components/Cart/Cart"
import CartContextC from "./Components/CartContext/CartContextC"
import Checkout from "./Components/Checkout/Checkout"
import ItemDetailContainer from "./Components/ItemD/ItemDetailContainer"
import ItemListContainer from "./Components/ItemL/ItemListContainer"
import NavBar from './Components/Navbar/NavBar'

export default function App() {
 return (
<>
 <CartContextC>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        <h6>ACA ESTA EL FOOTER</h6>
    </BrowserRouter>
  </CartContextC>
</>
  )
}