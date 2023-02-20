import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Header />
      <div>
        <HeroSection name="About Us" />
      </div>
      <Footer />
    </>
  );
};

export default About;
