interface DressCardProps {
  img: string;
  status: string;
  title: string;
  link: string;
  price: number;
}

export default function ProductCard({
  img,
  status,
  title,
  link,
  price,
}: DressCardProps) {
  return (
    <div className="col-sm col-md-6 col-lg-3 ftco-animate">
      <div className="product">
        <a href="#" className="img-prod">
          <img className="img-fluid" src={img} alt="Colorlib Template" />
          <span className="status">{status}</span>
        </a>
        <div className="text py-3 px-3">
          <h3>
            <a href={link}>{title}</a>
          </h3>
          <div className="d-flex">
            <div className="pricing">
              <p className="price">
                <span>${price}</span>
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
          <hr />
          <p className="bottom-area d-flex">
            <a href="#" className="add-to-cart">
              <span>
                Add to cart <i className="ion-ios-add ml-1" />
              </span>
            </a>
            <a href="#" className="ml-auto">
              <span>
                <i className="ion-ios-heart-empty" />
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
