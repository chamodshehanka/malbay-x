import BG5 from "../../assets/images/bg_5.jpg";

function SummerSale() {
  return (
    <>
      <section
        className="ftco-section ftco-section-more img"
        style={{ backgroundImage: `url(${BG5})` }}
      >
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section ftco-animate">
              <h2>Summer Sale</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SummerSale;
