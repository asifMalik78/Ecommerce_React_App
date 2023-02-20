import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";
const filterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters:{
    text:"",
    category:"all",
    company:"all",
    color:"all",
    maxPrice:0,
    price:0,
    minPrice:0
  }
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  //to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function based on the give parameter
  const sorting = (e) => {
    return dispatch({ type: "GET_SORTED_PRODUCTS", payload: e.target.value });
  };


  // updating the filter text (searching)
  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    return dispatch({type:"UPDATE_FILTER_VALUE", payload:{name , value}});
  }


  // to clear all filters
  const clearFilters = () => {
    dispatch({type:"CLEAR_FILTERS"})
  }
  // useEffect(()=>{
  //   dispatch({type:"UPDATE_FILTERED_PRODUCTS"});
  // });
  useEffect(() => {
    dispatch({type:"UPDATE_FILTERED_PRODUCTS"})
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value , state.filters]);


  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <filterContext.Provider
      value={{ ...state, setGridView, setListView, sorting , updateFilterValue , clearFilters}}
    >
      {children}
    </filterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(filterContext);
};
