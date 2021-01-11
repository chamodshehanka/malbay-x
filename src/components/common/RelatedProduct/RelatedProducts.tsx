import Product1 from "../../../assets/images/product-1.jpg";
import Product2 from "../../../assets/images/product-2.jpg";
import Product3 from "../../../assets/images/product-3.jpg";
import Product4 from "../../../assets/images/product-4.jpg";

function RelatedProducts() {
  const tempArray = [Product1, Product2, Product3, Product4];

  return (
    <>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big">Products</h1>
              <h2 className="mb-4">Related Products</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {tempArray.map((product) => (
              <div className="col-sm col-md-6 col-lg ftco-animate">
                <div className="product">
                  <a href="#" className="img-prod">
                    <img
                      className="img-fluid"
                      src={product}
                      alt="Colorlib Template"
                    />
                  </a>
                  <div className="text py-3 px-3">
                    <h3>
                      <a href="#">Young Woman Wearing Dress</a>
                    </h3>
                    <div className="d-flex">
                      <div className="pricing">
                        <p className="price">
                          <span>$120.00</span>
                        </p>
                      </div>
                      <div className="rating">
                        <p className="text-right">
                          <span className="ion-ios-star-outline"></span>
                          <span className="ion-ios-star-outline"></span>
                          <span className="ion-ios-star-outline"></span>
                          <span className="ion-ios-star-outline"></span>
                          <span className="ion-ios-star-outline"></span>
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p className="bottom-area d-flex">
                      <a href="#" className="add-to-cart">
                        <span>
                          Add to cart
                          <i className="ion-ios-add ml-1"></i>
                        </span>
                      </a>
                      <a href="#" className="ml-auto">
                        <span>
                          <i className="ion-ios-heart-empty"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default RelatedProducts;
