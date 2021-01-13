import ProductCard from "../../components/ShopPage/ProductCard";
import { useGetProducts } from "../../queries/useGetProducts";

export default function DressCardSection() {
  const { data: productsList = [], isSuccess } = useGetProducts();

  return (
    <>
      <section className="ftco-section bg-light">
        <div className="container-fluid">
          <div className="row">
            {isSuccess &&
              productsList.map((p) => (
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
