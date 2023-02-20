import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useUserContext } from "../context/userContext";
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
const UpdateProfile = () => {
  const { user, updateProfile, logoutUser } = useUserContext();
  const [userData, setUserData] = useState({
    username: user.username,
    email: user.email,
  });

  const [file, setFile] = useState();
  const [previewImage, setPreviewImage] = useState(null);

  const navigate = useNavigate();
  const changeHandler = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const changeFileHandler = (e) => {
    setPreviewImage(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await updateProfile(file, userData);
    navigate("/login");
    logoutUser();
  };
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <form className="login-form">
            <h3>Update Profile</h3>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={userData.username}
              onChange={changeHandler}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={userData.email}
              onChange={changeHandler}
              required
            />
            <div className="img-upload-wrapper">
              <figure>
                <img
                  src={
                    previewImage === null
                      ? user.img
                      : URL.createObjectURL(previewImage)
                  }
                  alt="uploaded-image"
                />
              </figure>
              <label htmlFor="upload-img" className="img-upload-box">
                Choose File
              </label>
              <input
                id="upload-img"
                type="file"
                name="img"
                onChange={changeFileHandler}
              />
            </div>

            <button onClick={submitHandler}>Save Changes</button>
          </form>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default UpdateProfile;
