const productReducer = (state, action) => {
  // if(action.type==='SET_LOADING'){
  //     return {
  //         ...state,
  //         isLoading:true
  //     }
  // }

  // if(action.type==='API_ERROR'){
  //     return {
  //         ...state,
  //         isLoading:false,
  //         isError:true
  //     }
  // }

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_API_DATA":
      const featuredData = action.payload.filter((data) => {
        return data.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        featuredProducts: featuredData,
        products: action.payload,
      };

    case "SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
