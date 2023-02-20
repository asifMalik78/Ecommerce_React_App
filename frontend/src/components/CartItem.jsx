import React, { useState } from "react";
import FormatPrice from "../helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";
const CartItem = (cartItems) => {
  const { id, name, image, color, price, amount } = cartItems;
  const {removeProduct , setIncrease , setDecrease} = useCartContext();
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} className="src" />
          </figure>
        </div>

        <p>{name}</p>
        <div className="color-div">
          <p>Color:</p>
          <div
            className="color-style"
            style={{ backgroundColor: `${color}`, color: color }}
          ></div>
        </div>
      </div>

      {/* price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* quantity */}
      <CartAmountToggle
        amount={amount}
        id={id}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* subtotal */}
      <div className="cart-hide">
        <p>
            <FormatPrice price={price * amount}/>
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeProduct(id)}/>
      </div>
    </div>
  );
};

export default CartItem;
