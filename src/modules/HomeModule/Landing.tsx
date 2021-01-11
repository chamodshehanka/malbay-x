import IMG from "../../assets/images/bg_1.jpg";

function Landing() {
  return (
    <>
      <div
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: "url(" + IMG + ")", height: "100vh" }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <h3 className="v">Modist - Time to get dress</h3>
            <h3 className="vr">Since - 1985</h3>
            <div className="col-md-11 ftco-animate text-center">
              <h1>Le Stylist</h1>
              <h2>
                <span>Wear Your Dress</span>
              </h2>
            </div>
            <div className="mouse">
              <a href="#" className="mouse-icon">
                <div className="mouse-wheel">
                  <img src="https://img.icons8.com/android/24/000000/expand-arrow.png" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
