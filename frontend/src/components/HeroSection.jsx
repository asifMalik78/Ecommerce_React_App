import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";


const Wrapper = styled.section`
   padding:8rem 0;
   img{
    min-width: 30rem;
    height:24rem;
    border-radius:0.5rem;
   }

   .hero-section-data{
    p{
        margin:2rem 0;
        margin-top:0;
    }

    h1{
        text-transform: capitalize;
        font-weight:bold;
    }

    .info-data{
        margin-bottom:0;
    }
   }

   .hero-section-image{
    width:100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
   }

   figure{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after{
        content:"";
        width:80%;
        height:80%;
        background-color: rgba(81,56,238,0.4);
        position:absolute;
        left:28%;
        top:-3rem;
        border-radius:0.5rem;
        z-index:-1;
    }
   }

   @media (max-width:${({theme}) => theme.media.mobile}){
    padding:3rem 0;

    .grid{
        display: flex;
        flex-direction: column;
        row-gap:6rem;
    }

    img{
        height:28rem;
    }

    .hero-section-image{
        display: flex;
        justify-content:center;
        figure{
            &::after{
               display: none;
            }
        }
    }
   }

`;
const HeroSection = ({name}) => {
    const navigate = useNavigate();
    const onClickHandler = ()=>{
        navigate("/products");
    }
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          {/* left part */}
          <div className="hero-section-data">
            <div className="hero-section-info">
              <p className="info-data">Welcome to</p>
              <h1>{name}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, cumque quas. Ipsum asperiores modi, ex non optio
                quibusdam reiciendis repudiandae fuga unde, maxime quisquam
                eligendi sapiente debitis impedit aut! Doloribus non odit facere
                veniam harum sapiente nobis ullam vel qui.
              </p>
              <Button onClick={onClickHandler}>Shop Now</Button>
            </div>
          </div>

          {/* right part */}
          <div className="hero-section-image">
                <figure>
                    <img src="http://127.0.0.1:5173/images/hero.png" alt="hero section image" />
                </figure>
            </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
