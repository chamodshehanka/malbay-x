import CartBanner from "../../modules/CartModule/CartBanner";
import CartTable from "../../modules/CartModule/CartTable";
import RelatedProducts from "../../components/common/RelatedProduct/RelatedProducts";

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
