import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { Button } from "../styles/Button";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const AddToCart = ({ product }) => {
  const { _id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <Wrapper>
      <div className="colors">
        <div>
          <span>Colors :</span>
          {colors.map((currElm, idx) => {
            return (
              <button
                key={idx}
                style={{ background: currElm , border:"1px solid black" }}
                className={color === currElm ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(currElm)}
              >
                {color === currElm ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* cart amount toggle */}

      <CartAmountToggle
        amount={amount}
        id={_id}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <Button
        onClick={() => addToCart(_id, color, amount, product)}
        className="btn"
      >
        Add To Cart
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    span {
      font-size: 2rem;
    }
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1.4rem;
    color: #fff;
  }

  .cart-button {
    margin-bottom: 2.4rem;
  }

  // we can use it as a global one two
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.2rem;
      background-color: #ffff;
      border: 2px solid black;
      padding: 0.8rem 1.2rem;
      text-align: center;
      border-radius: 1rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
