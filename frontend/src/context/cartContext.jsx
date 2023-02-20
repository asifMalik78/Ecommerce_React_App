import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
const cartContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("CART")),
  total_item:0,
  total_price:0,
  shipping_fee: 50000,
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // add to cart
  const addToCart = (_id, color, amount, product) => {
    dispatch({
      type: "ADDING_ITEMS_CART",
      payload: {_id, color, amount, product },
    });
  };

  // removing the product from cart
  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // increase amount
  const setIncrease = (id) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: id });
  };

  // decrease amount
  const setDecrease = (id) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: id });
  };

  // adding the data to the local storage
  useEffect(() => {
    dispatch({type:"CART_TOTAL_ITEM"});
    dispatch({type:"CART_TOTAL_PRICE"});
    localStorage.setItem("CART", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <cartContext.Provider
      value={{
        ...state,
        addToCart,
        removeProduct,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
