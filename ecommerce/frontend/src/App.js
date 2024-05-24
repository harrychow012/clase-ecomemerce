import { Routes, Route } from "react-router-dom"

import "./App.css";

// assets de bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// principal components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import OrderSuccess from './components/OrderSuccess'
import TagProducts from "./components/TagProducts";


//customer panel
import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login"
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import OrderFailure from './components/OrderFailure'
import WishList from "./components/Customer/Wishlist";
import Profile from "./components/Customer/Profile";
import ChangePassword from "./components/Customer/ChangePassword";
import AddressList from "./components/Customer/AdressList";
import AddAdress from "./components/Customer/AddAddress";

//route seller
import SellerLogin from "./components/seller/SellerLogin";
import SellerRegister from "./components/seller/SellerRegister";
import SellerDasboard from './components/seller/SellerDashboard'
import SellerProducts from "./components/seller/SellerProducts";
import VendorOrders from "./components/seller/VendorOrders";
import Customer from "./components/seller/Customer";
import SellerAddProduct from './components/seller/AddProduct'
import Report from "./components/seller/Report";
import SellerProfile from "./components/seller/Profile";

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<AllProducts />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/category/:category_slug/:category_id" element={<CategoryProducts />} />
        <Route path="/products/:tag" element={<TagProducts />} />
        <Route path="/product/:product_slug/:product_id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/success" element={<OrderSuccess />} />
        <Route path="/order/failure" element={<OrderFailure />} />

        {/* Customer Routes */}
        <Route path="/customer/register" element={<Register />} />
        <Route path="/customer/login" element={<Login />} />
        <Route path="/customer/dashboard" element={<Dashboard />} />
        <Route path="/customer/orders" element={<Orders />} />
        <Route path="/customer/wishlist" element={<WishList />} />
        <Route path="/customer/profile" element={<Profile />} />
        <Route path="/customer/Change-password" element={<ChangePassword />} />
        <Route path="/customer/addresses" element={<AddressList />} />
        <Route path="/customer/add-address" element={<AddAdress />} />

        {/* seller panel */}
        <Route path="/seller/login" element={<SellerLogin />} />
        <Route path="/seller/register" element={<SellerRegister />} />
        <Route path="/seller/dashboard" element={<SellerDasboard />} />
        <Route path="/seller/products" element={<SellerProducts />} />
        <Route path="/seller/add-product" element={<SellerAddProduct />} />
        <Route path="/seller/orders" element={<VendorOrders />} />
        <Route path="/seller/customers" element={<Customer />} />
        <Route path="/seller/reports" element={<Report />} />
        <Route path="/seller/profile" element={<SellerProfile />} />

      </Routes>
      <Footer />

    </>
  );
}

export default App;
