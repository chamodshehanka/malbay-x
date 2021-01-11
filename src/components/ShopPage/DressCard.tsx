export default function DressCard(props: any) {
  return (
    <div className="col-sm col-md-6 col-lg-3 ftco-animate">
      <div className="product">
        <a href="#" className="img-prod">
          <img className="img-fluid" src={props.img} alt="Colorlib Template" />
          <span className="status">{props.status}</span>
        </a>
        <div className="text py-3 px-3">
          <h3>
            <a href={props.link}>{props.title}</a>
          </h3>
          <div className="d-flex">
            <div className="pricing">
              <p className="price">
                <span>{props.price}</span>
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
                Add to cart <i className="ion-ios-add ml-1"></i>
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
  );
}
