import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useUserContext } from "../context/userContext";
import { successNotification, errorNotification } from "../styles/ToastNotify";

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
    row-gap: 2rem;
    background-color: #fff;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.helper};
    -webkit-box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);
    background-color: #fff;
    h3 {
      text-align: center;
    }
    input {
      border-radius: 0.5rem;
      text-transform: none;
    }

    input[type="file"] {
      display: none;
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

    .img-upload-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      figure {
        width: 5rem;
        height: 5rem;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .img-upload-box {
        flex: 0.8;
        padding: 1.6rem 0;
        border-radius: 0.5rem;
        text-align: center;
        border: 1px solid ${({ theme }) => theme.colors.helper};
      }
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
const ChangePassword = () => {
  const [userData, setUserData] = useState({
    password: "",
    confirm_password: "",
  });

  const { user, logoutUser } = useUserContext();
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
      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/api/user/${user._id}`,
        { password: userData.password },
        {
          headers: {
            token: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      successNotification("Password Updated Successfully");
      logoutUser();
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
            <h3>Change Password</h3>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={userData.password}
              required
              onChange={changeHandler}
            />
            <input
              type="password"
              name="confirm_password"
              value={userData.confirm_password}
              placeholder="confirm_password"
              required
              onChange={changeHandler}
            />

            <button onClick={clickHandler}>Save Changes</button>
          </form>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default ChangePassword;
