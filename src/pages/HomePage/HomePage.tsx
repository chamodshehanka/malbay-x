import React from "react";
import Footer from "../../components/common/Footer/Footer";
import Navbar from "../../components/common/Navbar/Navbar";
import InsightsSection from "../../components/home/InsightsSection";
import Landing from "../../components/home/Landing";
import NewsLetter from "../../components/home/NewsLetter";
import OnlineFashionShopSection from "../../components/home/OnlineFashionShopSection";
import OurProducts from "../../components/home/OurProducts";
import ServiceSection from "../../components/home/ServiceSection";
import SummerSale from "../../components/home/SummerSale";
import TrendingSection from "../../components/home/TrendingSection";

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
