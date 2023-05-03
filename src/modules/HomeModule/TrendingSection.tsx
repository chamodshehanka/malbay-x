import productImg1 from "../../assets/images/product-1.jpg";
import productImg2 from "../../assets/images/product-2.jpg";
import productImg3 from "../../assets/images/product-3.jpg";
import productImg4 from "../../assets/images/product-4.jpg";
import productImg5 from "../../assets/images/product-5.jpg";
import productImg6 from "../../assets/images/product-6.jpg";

export default function TrendingSection() {
  const tempArray = [
    productImg1,
    productImg2,
    productImg3,
    productImg4,
    productImg5,
    productImg6,
  ];

  return (
    <>
      <div className="goto-here" />
      <section className="ftco-section ftco-product">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big">Trending</h1>
              <h2 className="mb-4">Trending</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="product-slider owl-carousel ftco-animate">
                {tempArray.map((image, i) => (
                  <div className="item" key={i}>
                    <div className="product">
                      <a href="#" className="img-prod">
                        <img
                          className="img-fluid"
                          src={image}
                          alt="Colorlib Template"
                        />
                        <span className="status">30%</span>
                      </a>
                      <div className="text pt-3 px-3">
                        <h3>
                          <a href="#">Young Woman Wearing Dress</a>
                        </h3>
                        <div className="d-flex">
                          <div className="pricing">
                            <p className="price">
                              <span className="mr-2 price-dc">$120.00</span>
                              <span className="price-sale">$80.00</span>
                            </p>
                          </div>
                          <div className="rating">
                            <p className="text-right">
                              <span className="ion-ios-star-outline" />
                              <span className="ion-ios-star-outline" />
                              <span className="ion-ios-star-outline" />
                              <span className="ion-ios-star-outline" />
                              <span className="ion-ios-star-outline" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
