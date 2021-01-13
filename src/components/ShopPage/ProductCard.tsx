import { Button, withStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Rating } from "@material-ui/lab";

const StyledRating = withStyles({
  iconFilled: {
    color: "#7272f5",
  },
  iconHover: {
    color: "#5f27cd",
  },
})(Rating);

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
  const isLiked = false;

  return (
    <div className="col-sm col-md-6 col-lg-3">
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
                <span>LKR {price}</span>
              </p>
            </div>
            <div className="rating">
              <p className="text-right">
                <StyledRating
                  name="customized-color"
                  defaultValue={2}
                  getLabelText={(value) =>
                    `${value} Heart${value !== 1 ? "s" : ""}`
                  }
                  precision={0.5}
                  icon={<FavoriteIcon fontSize="inherit" />}
                />
              </p>
            </div>
          </div>
          <hr />
          <p className="bottom-area d-flex">
            <Button color={"primary"} size={"small"}>
              Add to Cart
              <ShoppingCartIcon color={"primary"} fontSize={"small"} />
            </Button>

            <Button className="ml-auto">
              {isLiked ? (
                <FavoriteIcon color={"primary"} fontSize={"small"} />
              ) : (
                <FavoriteBorderIcon color={"primary"} fontSize={"small"} />
              )}
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
