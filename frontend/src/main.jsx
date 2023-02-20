import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterContextProvider } from "./context/filterContext";
import { AppProvider } from "./context/productContext";
import { CartProvider } from "./context/cartContext";
import { UserContextProvider } from "./context/userContext";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="19994759507-rg4j4mig9mes2cm0mbbdqjelr0h2jia6.apps.googleusercontent.com">
    <UserContextProvider>
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <ToastContainer />
            <App />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </UserContextProvider>
  </GoogleOAuthProvider>
);
