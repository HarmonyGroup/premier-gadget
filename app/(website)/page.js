import React from "react";
import Hero from "../../components/Hero";
import PopularCategories from "../../components/PopularCategories";
import ComputingAccessories from "../../components/ComputingAccessories";
import Extras from "../../components/Extras";
import Footer from "../../components/Footer";

const Page = () => {
  return (
    <>
      <Hero />
      <PopularCategories />
      <ComputingAccessories />
      <Extras />
    </>
  );
};

export default Page;
