import CartBanner from "../../modules/CartModule/CartBanner";
import CartTable from "./CartTable";
import RelatedProducts from "./RelatedProducts";

function CartPage() {
  return (
    <>
      <CartBanner />
      <CartTable />
      <RelatedProducts />
    </>
  );
}

export default CartPage;
