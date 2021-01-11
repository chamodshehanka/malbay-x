import Footer from "../../components/common/Footer/Footer";
import Navbar from "../../components/common/Navbar/Navbar";
import Cover from "../../modules/ShopModule/Cover";
import NewsLetter from "../../modules/HomeModule/NewsLetter";
import DressCardSection from "../../modules/ShopModule/DressCardSection";
import PageNumbers from "../../modules/ShopModule/PageNumbers";

function ShopPage() {
  return (
    <>
      <Navbar />
      <Cover />
      <DressCardSection />
      <PageNumbers />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default ShopPage;
