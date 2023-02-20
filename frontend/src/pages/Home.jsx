import React from "react";
import styled from "styled-components";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import { useProductContext } from "../context/productContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Wrapper = styled.section`
  /* height: calc(100vh - 10rem); */
`;
const Home = () => {
  const name = useProductContext();
  return (
    <>
    <Header/>
    <div>
      <HeroSection name="Ecommerce Store"/>

      <FeaturedProducts />
      <Services />
      <Trusted />
    </div>
    <Footer/>
    </>
  );
};

export default Home;
