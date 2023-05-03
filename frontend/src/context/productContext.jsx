import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";
const AppContext = createContext();


const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading:false,
  singleProduct:{}
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //get all products
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //get single product
  const getSingleProduct = async (url) => {
    dispatch({type:"SINGLE_LOADING"});
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({type:"SET_SINGLE_PRODUCT" , payload:singleProduct});
    } catch (err) {
      dispatch({type:"SET_SINGLE_ERROR"});
    }
  };

  useEffect(() => {
    getProducts(`${import.meta.env.VITE_BASE_URL}/product/all`);
  }, []);
  return (
    <AppContext.Provider value={{ ...state , getSingleProduct }}>{children}</AppContext.Provider>
  );
};

// custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext};
