import React from "react";
import styled from "styled-components";
import FilterSection from "../components/FilterSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";
import { useProductContext } from "../context/productContext";
const Products = () => {
  const { isLoading } = useProductContext();
  if (isLoading) {
    return (
      <Wrapper>
        <div className="container" 
        style={{ 
           height: "50vh",
           width: "100%" ,
           display:"flex",
           justifyContent:"center",
           alignItems:"center"
           }}>
          <img
            src="https://raw.githubusercontent.com/asifMalik78/Ecommerce_React_App/master/screenshots/Iphone-spinner-2.gif"
            alt="gif"
            className="src"
          />
        </div>
      </Wrapper>
    );
  }

  return (
    <>
    <Header/>
    <Wrapper>
      <div className="container grid grid-two-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>

          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
    <Footer/>
    </>
  );
};

const Wrapper = styled.section`
  .grid-two-column {
    grid-template-columns: 0.2fr 1fr;
  }

  .loader {
    color: #ffffff;
    font-size: 45px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;

    height: 1em;
    border-radius: 50%;
    position: relative;
    transform: translateZ(0);
    animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
  }

  @keyframes mltShdSpin {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }

  @keyframes round {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Products;
