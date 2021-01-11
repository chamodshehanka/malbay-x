import Footer from "../../components/common/Footer/Footer";
import Navbar from "../../components/common/Navbar/Navbar";
import Landing from "../../components/home/Landing";
import NewsLetter from "../../components/home/NewsLetter";
import ServiceSection from "../../components/home/ServiceSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <Landing />
      <ServiceSection />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default HomePage;
