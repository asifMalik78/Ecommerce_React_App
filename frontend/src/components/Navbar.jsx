import React, { useState } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { toast } from "react-toastify";

const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 2.4rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.6rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;
    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      color: #000;
      font-size: 1.5rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 55%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }

  .user-login--name {
    text-decoration: capitalize;
  }

  .user-logout,
  .user-login {
    font-size: 1.6rem;
    padding: 0.4rem 1rem;
  }
  .user-image {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    overflow: hidden;
    row-gap: 3rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .img-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.5rem;
  }
  .username {
    color: black;
    font-size: 1rem;
    text-transform: capitalize;
  }
  .cart-user {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 28%;
      right: 4%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      padding: 0 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      row-gap: 4rem;
      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.5s linear;

      li {
        &:hover {
          background-color: #fff;
        }
      }
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 9999;
      transform-origin: right;
      transition: all 0.5s linear;

      .navbar-link {
        font-size: 4.2rem;
      }
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 5.2rem;
      }

      .cart-total--item {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 3.5rem;
      padding: 1.2rem 2.4rem;
    }

    .user-image {
      height: 10rem;
      width: 10rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .username {
      font-size: 3rem;
    }

    .img-name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .cart-user {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
      row-gap: 5rem;
    }
  }
`;
const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();

  const notify = (message) => {
    toast.success(`${message}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            {user ? (
              <NavLink to="/">
                <Button
                  className="user-logout"
                  onClick={() => {
                    logoutUser();
                    notify("Logged Out Successfully");
                  }}
                >
                  LOG OUT
                </Button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Button className="user-login">LOG IN</Button>
              </NavLink>
            )}
          </li>
          <li className="cart-user">
            <NavLink
              to="/cart"
              className="navbar-link cart-trolley--link"
              onClick={() => setMenuIcon(false)}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>

            {user && (
              <NavLink to="/profile">
                <div className="img-name">
                  <figure className="user-image">
                    <img src={user.img} alt="avatar" />
                  </figure>
                  <div className="username">{user.username}</div>
                </div>
              </NavLink>
            )}
          </li>
        </ul>

        {/* two buttons for open and closing the menu */}

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />

          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
