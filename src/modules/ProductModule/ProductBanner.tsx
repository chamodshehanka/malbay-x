import BG6 from "../../assets/images/bg_6.jpg";

function ProductBanner() {
  return (
    <>
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: `url(${BG6})` }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-0 bread">Product Single</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">Home</a>
                </span>
                <span className="mr-2">
                  <a href="/">Product</a>
                </span>
                <span>Product Single</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBanner;
