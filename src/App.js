import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScriptLoader from "./components/ScriptLoader";
import About from "./pages/About";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./pages/Signup";
import CategoryWise from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetailPage";
import AddProduct from "./components/admin/AddProduct";
import StartOrdering from './pages/StartOrdering';
import ConfirmOrder from './pages/ConfirmOrder';
import ThankYou from "./pages/ThankYou";
import Cart from "./pages/Cart";
import OrderPlaced from "./pages/OrderPlaced";
import AdminOrders from './components/admin/AdminOrders';
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ContactMessagesAdmin from "./components/admin/ContactMessagesAdmin";
import AdminSafetyProducts from "./components/admin/AdminSafetyProducts";
import SafetyProductDetails from './pages/SafetyProductDetails';
import OrderPage from './pages/OrderPage';
import Profile from "./pages/Profile";
import AdminSafetyOrders from "./components/admin/AdminSafetyOrders";
import ProcessTracker from "./pages/ProcessTracker";


function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Paths jahan Navbar aur Footer hide karne hain
  const hideNavbarFooterPaths = ["/login", "/admin"];
  const hideLayout = hideNavbarFooterPaths.some(path => location.pathname.startsWith(path));

  return (
    <>
      <ScrollToTop />
      <ScriptLoader />
      {loading && (
        <div id="ms-overlay">
          <div className="loader"></div>
        </div>
      )}

      {/* Navbar conditionally */}
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categorywise" element={<CategoryWise />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/AdminSafetyProducts" element={<AdminSafetyProducts />} />
        <Route path="/category/:label" element={<CategoryWise />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/start-ordering" element={<StartOrdering />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/contacts" element={<ContactMessagesAdmin />} />
        <Route path="/safety-product/product/:id" element={<SafetyProductDetails />} />
        <Route path="/order" element={<OrderPage />} />
<Route path="/profile" element={<Profile />} />
<Route path="/admin/safety-orders" element={<AdminSafetyOrders />} />
<Route path="/admin/process-tracker" element={<ProcessTracker />} />


      </Routes>

      {/* Footer conditionally */}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
