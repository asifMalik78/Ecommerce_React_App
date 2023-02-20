import React, { useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/userContext";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import { successNotification, errorNotification } from "../styles/ToastNotify";
import { NavLink } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled.section`
  background-color: #ffffff;
  background-image: url("https://www.transparenttextures.com/patterns/connected.png");
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
  }
  .login-form {
    padding: 4rem 2rem;
    width: 30%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.helper};
    -webkit-box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);
    background-color: #fff;
    margin-bottom:10rem;
    .logo-image {
      max-width: 18rem;
      align-self: center;
      margin-bottom: 4rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    input {
      border-radius: 0.5rem;
      text-transform: none;
    }

    p {
      text-align: center;
    }
    button {
      background-color: ${({ theme }) => theme.colors.helper};
      border-radius: 0.5rem;
      padding: 1.2rem 0rem;
      border: none;
      color: white;
      cursor: pointer;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0;

    .login-form {
      width: 100%;
      margin: 15rem auto;
    }
  }
`;

const API = "http://localhost:5000/api/auth/signin";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { loginUser } = useUserContext();
  const changeHandler = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await loginUser(API, userData);
      setUserData((prev) => {
        return {
          ...prev,
          password: "",
        };
      });

      if (localStorage.getItem("User") != "null") {
        successNotification("Logged In Successfully");
      } else {
        errorNotification("Wrong Username Or Password");
      }
    } catch (error) {
      errorNotification(error.message);
    }
  };

  // google login
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <form className="login-form">
            <figure className="logo-image">
              <img src="http://127.0.0.1:5173/images/logo.png" alt="" />
            </figure>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={userData.email}
              onChange={changeHandler}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={userData.password}
              onChange={changeHandler}
              required
            />

            <button onClick={loginHandler}>Log In</button>

            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            <p>
              Don't have account ? <NavLink to="/register">Register</NavLink>
            </p>
          </form>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Login;
