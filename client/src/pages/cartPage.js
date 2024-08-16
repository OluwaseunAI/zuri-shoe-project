import React, { useState, useEffect } from "react";
import { useAuth, useCart } from "../contexAPI/index";
import Layout from "./../components/Layout/Layout-main";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import toast from "react-hot-toast";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStripePromise = async () => {
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PK);
      setStripePromise(stripe);
    };
    fetchStripePromise();
  }, []);

  useEffect(() => {
    const fetchClientSecret = async () => {
      const { data } = await axios.get("/api/v1/product/stripe/secret");
      setClientSecret(data?.clientSecret);
    };
    fetchClientSecret();
  }, [auth?.token]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const result = await stripePromise.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
            number: "4242424242424242",
            exp_month: 12,
            exp_year: 2025,
            cvc: "123",
          },
        },
      });
      if (result.error) {
        throw result.error;
      }
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Cart Page Content */}
    </Layout>
  );
};

export default CartPage;