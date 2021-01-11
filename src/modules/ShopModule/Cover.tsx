import IMG from "../../assets/images/bg_6.jpg";

export default function Cover() {
  return (
    <div
      className="hero-wrap hero-bread"
      style={{ backgroundImage: "url(" + IMG + ")" }}
    >
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
            <h1 className="mb-0 bread">Collection</h1>
            <p className="breadcrumbs">
              <span className="mr-2">
                <a href="index.html">Home</a>
              </span>
              <span>Product</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
