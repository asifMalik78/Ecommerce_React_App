const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADDING_ITEMS_CART":
      let {
        _id,
        color,
        amount,
        product: { name, image, price, stock },
      } = action.payload;

      let existingProduct = state.cart.find((curr) => {
        return curr.id === _id + color;
      });

      if (existingProduct) {
        let updatedProduct = state.cart.map((curr) => {
          if (curr.id === _id + color) {
            let totalAmt = curr.amount + amount;

            if (totalAmt >= curr.max) {
              totalAmt = curr.max;
            }
            return {
              ...curr,
              amount: totalAmt,
            };
          } else {
            return curr;
          }
        });
        return {
          ...state,
          cart: [...updatedProduct],
        };
      } else {
        let newData;
        newData = {
          id: _id + color,
          name: name,
          color,
          amount,
          image: image[0],
          price: price,
          max: stock,
        };
        return {
          ...state,
          cart: [...state.cart, newData],
        };
      }

    case "REMOVE_ITEM":
      let newFilteredData = state.cart;
      newFilteredData = newFilteredData.filter((curr) => {
        return curr.id !== action.payload;
      });
      return {
        ...state,
        cart: newFilteredData,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "DECREASE_AMOUNT":
      let filteredProductDec = state.cart.map((curr) => {
        if (curr.id === action.payload) {
          let decAmt = curr.amount - 1;
          if (decAmt <= 1) {
            decAmt = 1;
          }

          return {
            ...curr,
            amount: decAmt,
          };
        } else {
          return curr;
        }
      });

      return {
        ...state,
        cart: filteredProductDec,
      };

    case "INCREASE_AMOUNT":
      let filteredProductInc = state.cart.map((curr) => {
        if (curr.id === action.payload) {
          let incAmt = curr.amount + 1;
          if (incAmt > curr.max) {
            incAmt = curr.max;
          }

          return {
            ...curr,
            amount: incAmt,
          };
        } else {
          return curr;
        }
      });

      return {
        ...state,
        cart: filteredProductInc,
      };

    case "CART_TOTAL_ITEM":
      let updatedItemVal = state.cart?.reduce((acc , curr) => {
        let {amount} = curr;
        acc = acc + amount;
        return acc;
      } , 0);

      return {
        ...state , 
        total_item:updatedItemVal
      }

    case "CART_TOTAL_PRICE":
      let totalPriceVal = state.cart?.reduce((acc , curr) => {
        let {price , amount} = curr;
        acc = acc + (price * amount);
        return acc;
      } , 0);
      return {
        ...state , 
        total_price:totalPriceVal
      }
    default:
      return state;
  }
};

export default cartReducer;
