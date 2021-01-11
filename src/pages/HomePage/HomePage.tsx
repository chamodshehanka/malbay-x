import React from "react";
import Footer from "../../components/common/Footer/Footer";
import Navbar from "../../components/common/Navbar/Navbar";
import Landing from "../../components/home/Landing";

function HomePage(): JSX.Element {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}

export default HomePage;
