import TopBar from "./Components/TopBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Index from "./Components/Index";
import Shop from "./PageComponents/Shop";
import AddBrand from "./PageComponents/AddBrand";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBrand } from "./Service/BrandSlice";
import AddProduct from "./PageComponents/AddProduct";
import 'react-toastify/dist/ReactToastify.css';
import { fetchProduct } from "./Service/ProductSlice";
import ShopDetails from "./Components/ShopDetail";
import SignUp from "./PageComponents/SignUp";
function App() {
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchBrand());
    dispatch(fetchProduct());
  },[])
  return (
        <BrowserRouter>
        <TopBar></TopBar>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/addBrand" element={<AddBrand/>}></Route>
          <Route path="/addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="/ShopDetail" element={<ShopDetails></ShopDetails>}></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
  );
}
export default App;