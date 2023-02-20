import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useUserContext } from "../context/userContext";
import { Button } from "../styles/Button";

const Wrapper = styled.section`
  padding: 2rem 0;
  background-color: #ffffff;
  background-image: url("https://www.transparenttextures.com/patterns/connected.png");
  .container {
    h2 {
      margin-bottom: 2rem;
    }

    .grid {
      padding: 3rem;
      border-radius: 0.5rem;
      -webkit-box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);
      background-color: #fff;
    }
  }
  .image-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 5rem;
    figure {
      height: 30rem;
      width: 30rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .btn {
    width: 30rem;
  }

  .user-information {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .user-information-items {
      h3 {
        font-size: 3rem;
      }

      p {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      grid-template-columns: 1fr;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .user-information {
        padding: 2rem 0;
        margin-top: 3rem;
        row-gap: 2rem;
      }
    }
  }
`;
const Profile = () => {
  const { user } = useUserContext();
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <h2>My Profile</h2>
          <div className="grid grid-two-column">
            <div className="image-section">
              <figure>
                <img src={user?.img} alt="" />
              </figure>
              <NavLink to="/profile/update">
                <Button className="btn">Edit Profile</Button>
              </NavLink>
            </div>

            <div className="user-information">
              <div className="user-information-items">
                <h3>Full Name</h3>
                <p>{user?.username}</p>
              </div>

              <div className="user-information-items">
                <h3>Email</h3>
                <p>{user?.email}</p>
              </div>

              <div className="user-information-items">
                <h3>Joined On</h3>
                <p>{new Date(user?.createdAt).toLocaleDateString()}</p>
              </div>

              <NavLink to="/profile/change_password">
                <Button className="btn">Change Password</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Profile;
