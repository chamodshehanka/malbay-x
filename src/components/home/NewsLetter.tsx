import React from "react";

function NewsLetter() {
  return (
    <>
      <section className="ftco-section-parallax">
        <div className="parallax-img d-flex align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-center py-5">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <h1 className="big">Subscribe</h1>
                <h2>Subscribe to our Newsletter</h2>
                <div className="row d-flex justify-content-center mt-5">
                  <div className="col-md-8">
                    <form action="#" className="subscribe-form">
                      <div className="form-group d-flex">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email address"
                        />
                        <input
                          type="submit"
                          value="Subscribe"
                          className="submit px-3"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsLetter;
