import React from "react";
import { useFilterContext } from "../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";
const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();
  if (grid_view===true) {
    return <GridView product={filter_products} />;
  }
  if(grid_view===false){
    return <ListView product={filter_products} />;
  }
};

export default ProductList;
