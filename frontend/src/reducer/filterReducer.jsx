const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curr) => {
        return curr.price;
      });

      let maxPrice = Math.max(...priceArr);
      let minPrice = Math.min(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, minPrice, price: maxPrice },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORTED_PRODUCTS":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      let sort_value = action.payload;
      return {
        ...state,
        sorting_value: sort_value,
      };
    case "SORTING_PRODUCTS":
      const { filter_products } = state;
      let newSortData = [];
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }

        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);
      // if (state.sorting_value === "a-z") {
      //   newSortData = tempSortProduct.sort((a, b) =>
      //     a.name.localeCompare(b.name)
      //   );
      // }

      // if (state.sorting_value === "z-a") {
      //   newSortData = tempSortProduct.sort((a, b) =>
      //     b.name.localeCompare(a.name)
      //   );
      // }

      // if (state.sorting_value === "lowest") {

      //   newSortData = tempSortProduct.sort((a, b) => {
      //     return a.price - b.price;
      //   });
      // }

      // if (state.sorting_value === "highest") {
      //   newSortData = tempSortProduct.sort((a, b) => {
      //     return b.price - a.price;
      //   });
      //   console.log(newSortData);
      // }
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "UPDATE_FILTERED_PRODUCTS":
      let { all_products } = state;
      let tempFilteredProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilteredProduct = tempFilteredProduct.filter((curr) => {
          return curr.name.toLowerCase().includes(text);
        });
      }

      if (category.toLowerCase() !== "all") {
        tempFilteredProduct = tempFilteredProduct.filter((curr) => {
          return curr.category.toLowerCase() === category.toLowerCase();
        });
      }

      if (company.toLowerCase() !== "all") {
        tempFilteredProduct = tempFilteredProduct.filter((curr) => {
          return curr.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color !== "all") {
        tempFilteredProduct = tempFilteredProduct.filter((curr) => {
          return curr.colors.includes(color);
        });
      }

      if (price !== 0) {
        tempFilteredProduct = tempFilteredProduct.filter((curr) => {
          return curr.price <= price;
        });
      } else {
        tempFilteredProduct = tempFilteredProduct.filter((curr) => {
          return curr.price == price;
        });
      }
      return {
        ...state,
        filter_products: tempFilteredProduct,
      };
    
    case "CLEAR_FILTERS":
      return {
        ...state, 
        filters:{
          ...state.filters,
          text:"",
          category:"all",
          color:"all",
          price:state.filters.maxPrice,
          maxPrice:state.filters.maxPrice,
          minPrice:state.filters.minPrice
        }
      }
    default:
      return state;
  }
};

export default filterReducer;
