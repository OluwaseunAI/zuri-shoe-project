
import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

// -----Search Context-----
const SearchContext = createContext();
const SearchProvider = ({ cartChildren }) => {
  const [auth, setAuth] = useState({ keyword: "", results: [] });
  return (
    <SearchContext.Provider value={[auth, setAuth]}>
      {cartChildren}
    </SearchContext.Provider>
  );
};
const useSearch = () => useContext(SearchContext);

// ------Cart Context------
const CartContext = createContext();
const CartProvider = ({ cartChildren }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    let existingCartItem = localStorage.getItem("cart");
    if (existingCartItem) setCart(JSON.parse(existingCartItem));
  }, []);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {cartChildren}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);

// Auth Context
const AuthContext = createContext();
const AuthProvider = ({ cartChildren }) => {
  const [auth, setAuth] = useState({ user: null, token: "" });
  axios.defaults.headers.common["Authorization"] = auth && auth.token;
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({ ...auth, user: parseData.user, token: parseData.token });
    }
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {cartChildren}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { useSearch, SearchProvider, useCart, CartProvider, useAuth, AuthProvider };