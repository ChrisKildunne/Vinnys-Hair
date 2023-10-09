import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import ProductsPage from '../ProductsPage/ProductsPage';
// Remove the OrderHistoryPage import
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import ProductDetailsPage from '../ProductDetailsPage/ProductDetailsPage';
import CartPage from '../CartPage/CartPage';
import NavBar from '../../components/NavBar/NavBar';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import HomePage from '../HomePage/HomePage';  // Assuming you have a HomePage component
import ContactPage from '../ContactPage/ContactPage';  // Assuming you have a ContactPage component
import { getUser } from '../../utilities/users-service';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../index.css";
import "./App.css";

export default function App() {
  const stripePromise = loadStripe('pk_test_51No6rMEVc2xdoRcSmeja37cmqYVHdk2tQrztDcxyFF5HkLzdC7TZYZY4LhoiLDCC3jfTxbkqcN9mDBvKJwywHMED000DnPYeKD');
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/'); 
  }, []);

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<HomePage />} />  // Added HomePage route
        <Route path="/orders/new" element={<ProductsPage user={user} />} />
        <Route path="/contact" element={<ContactPage />} />  // Removed the user prop from ContactPage, assuming it's not necessary
        <Route path="/product/:productId" element={<ProductDetailsPage user={user} />} />
        <Route path="/orders/cart" element={<CartPage user={user} />} />
        <Route path="/orders/checkout" element={<Elements stripe={stripePromise}><CheckoutForm user={user} /></Elements>} />
      </Routes>
    </main>
  );
}
