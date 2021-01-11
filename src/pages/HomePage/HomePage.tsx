import React from "react";
import Footer from "../../components/common/Footer/Footer";
import Navbar from "../../components/common/Navbar/Navbar";
import InsightsSection from "../../modules/HomeModule/InsightsSection";
import Landing from "../../modules/HomeModule/Landing";
import NewsLetter from "../../modules/HomeModule/NewsLetter";
import OnlineFashionShopSection from "../../modules/HomeModule/OnlineFashionShopSection";
import OurProducts from "../../modules/HomeModule/OurProducts";
import ServiceSection from "../../modules/HomeModule/ServiceSection";
import SummerSale from "../../modules/HomeModule/SummerSale";
import TrendingSection from "../../modules/HomeModule/TrendingSection";

function HomePage(): JSX.Element {
  return (
    <>
      <Navbar />
      <Landing />
      <TrendingSection />
      <OnlineFashionShopSection />
      <OurProducts />
      <SummerSale />
      <InsightsSection />
      <ServiceSection />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default HomePage;
