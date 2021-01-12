import product1 from "../../assets/images/product-1.jpg";
// import product2 from "../../assets/images/product-2.jpg";
// import product3 from "../../assets/images/product-3.jpg";
// import product4 from "../../assets/images/product-4.jpg";
// import product5 from "../../assets/images/product-5.jpg";
// import product6 from "../../assets/images/product-6.jpg";
// import product7 from "../../assets/images/product-7.jpg";
// import product8 from "../../assets/images/product-8.jpg";
import ProductCard from "../../components/ShopPage/ProductCard";
import { useGetProducts } from "../../queries/useGetProducts";

// row has 8 cards
// page has 2 rows

export default function DressCardSection() {
  const {
    data: productsList = [],
    status: productStatus,
    isSuccess,
  } = useGetProducts();

  // TODO: List from here
  console.log(productsList, productStatus);

  return (
    <>
      <section className="ftco-section bg-light">
        <div className="container-fluid">
          <div className="row">
            {isSuccess &&
              productsList.map((p) => (
                <ProductCard
                  key={p?.ID}
                  img={product1}
                  status={"NEW 30%"}
                  title={p.Name}
                  link={"#"}
                  price={200}
                />
              ))}
            {/*<ProductCard*/}
            {/*  img={product1}*/}
            {/*  status={"NEW 30%"}*/}
            {/*  title={"Young Woman Wearing Dress"}*/}
            {/*  link={"#"}*/}
            {/*  price={200}*/}
            {/*/>*/}
            {/*<ProductCard*/}
            {/*  img={product2}*/}
            {/*  status={"NEW 30%"}*/}
            {/*  title={"Young Woman Wearing Dress"}*/}
            {/*  link={"#"}*/}
            {/*  price={200}*/}
            {/*/>*/}
            {/*<ProductCard*/}
            {/*  img={product3}*/}
            {/*  status={"NEW 30%"}*/}
            {/*  title={"Young Woman Wearing Dress"}*/}
            {/*  link={"#"}*/}
            {/*  price={200}*/}
            {/*/>*/}
            {/*<ProductCard*/}
            {/*  img={product4}*/}
            {/*  status={"NEW 30%"}*/}
            {/*  title={"Young Woman Wearing Dress"}*/}
            {/*  link={"#"}*/}
            {/*  price={200}*/}
            {/*/>*/}
            {/*<ProductCard*/}
            {/*  img={product5}*/}
            {/*  status={"NEW 30%"}*/}
            {/*  title={"Young Woman Wearing Dress"}*/}
            {/*  link={"#"}*/}
            {/*  price={200}*/}
            {/*/>*/}
            {/*<ProductCard*/}
            {/*  img={product6}*/}
            {/*  status={"NEW 30%"}*/}
            {/*  title={"Young Woman Wearing Dress"}*/}
            {/*  link={"#"}*/}
            {/*  price={200}*/}
            {/*/>*/}
            {/*<ProductCard*/}
            {/*  img={product7}*/}
            {/*  status={"NEW 30%"}*/}
            {/*  title={"Young Woman Wearing Dress"}*/}
            {/*  link={"#"}*/}
            {/*  price={200}*/}
            {/*/>*/}
            {/*<ProductCard*/}
            {/*  img={product8}*/}
            {/*  status={"NEW 30%"}*/}
            {/*  title={"Young Woman Wearing Dress"}*/}
            {/*  link={"#"}*/}
            {/*  price={200}*/}
            {/*/>*/}
          </div>
        </div>
      </section>
    </>
  );
}
