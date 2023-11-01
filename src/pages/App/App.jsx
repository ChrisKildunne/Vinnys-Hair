import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Switch } from 'react-router-dom';
import ProductsPage from '../ProductsPage/ProductsPage';
import ProductDetailsPage from '../ProductDetailsPage/ProductDetailsPage';
import CartPage from '../CartPage/CartPage';
import NavBar from '../../components/NavBar/NavBar';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import HomePage from '../HomePage/HomePage';  
import ContactPage from '../ContactPage/ContactPage';  
import MyWork from '../MyWork/MyWork';  
import About from '../About/About';  
import { getUser } from '../../utilities/users-service';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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

      <Routes>

        <Route path="/" element={ <>
              <NavBar user={user} setUser={setUser} />
              <HomePage/>
            </>} />  
        <Route path="/about" element={<>
              <NavBar user={user} setUser={setUser} />
              <About />
            </>} />  
        <Route path="/orders/new" element={<ProductsPage user={user} />} />
        <Route path="/contact" element={<>
              <NavBar user={user} setUser={setUser} />
              <ContactPage />
            </>} />  
        <Route path="/product/:productId" element={<ProductDetailsPage user={user} />} />
        <Route path="/orders/cart" element={<CartPage user={user} />} />
        <Route path="/orders/checkout" element={<Elements stripe={stripePromise}><CheckoutForm user={user} /></Elements>} />
      </Routes>
    </main>
  );
}
