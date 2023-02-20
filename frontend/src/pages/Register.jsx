import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { successNotification, errorNotification } from "../styles/ToastNotify";
import styled from "styled-components";
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
    text-transform: none;
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
const API = "http://localhost:5000/api/auth/signup";
const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API, userData);
      setUserData((prev) => {
        return {
          ...prev,
          username: "",
          email: "",
          password: "",
          confirm_password: "",
        };
      });

      successNotification("Registered Successfully");

      navigate("/login");
    } catch (error) {
      errorNotification(error.message);
    }
  };
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <form className="login-form">
            <figure className="logo-image">
              <img
                src="http://127.0.0.1:5173/images/logo.png"
                alt=""
                className="src"
              />
            </figure>
            <input
              type="text"
              placeholder="username"
              required
              name="username"
              value={userData.username}
              onChange={changeHandler}
            />
            <input
              type="email"
              placeholder="email"
              required
              name="email"
              value={userData.email}
              onChange={changeHandler}
            />
            <input
              type="password"
              placeholder="password"
              required
              name="password"
              value={userData.password}
              onChange={changeHandler}
            />
            <input
              type="password"
              placeholder="confirm password"
              required
              name="confirm_password"
              value={userData.confirm_password}
              onChange={changeHandler}
            />
            <button onClick={clickHandler}>Register</button>
            <p>
              Already have account ? <NavLink to="/login">Login</NavLink>
            </p>
          </form>
        </div>
      </Wrapper>
      <Footer/>
    </>
  );
};

export default Register;
