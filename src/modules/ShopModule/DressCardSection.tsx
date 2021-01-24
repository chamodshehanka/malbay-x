import ProductCard from "../../components/ShopPage/ProductCard";
import { useGetProducts } from "../../queries/useGetProducts";

export default function DressCardSection() {
  const {
    data: productsList = [],
    isSuccess,
    status: productListStatus,
  } = useGetProducts();

  const hasProductData = productListStatus === "success";
  console.log(productsList);
  return (
    <>
      <section className="ftco-section bg-light">
        <div className="container-fluid">
          <div className="row">
            {hasProductData &&
              productsList?.map((p) => (
                <ProductCard
                  key={p?.ID}
                  img={p?.Image}
                  status={"NEW 30%"}
                  title={p.Name}
                  link={"#"}
                  price={p.Price}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
