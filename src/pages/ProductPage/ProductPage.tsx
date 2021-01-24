import ProductBanner from "../../modules/ProductModule/ProductBanner";
import ProductView from "../../modules/ProductModule/ProductView";
import { useParams } from "react-router-dom";

interface ProductParamTypes {
  productId: string;
}

function ProductPage() {
  const { productId } = useParams<ProductParamTypes>();

  return (
    <>
      <ProductBanner />
      <ProductView productId={productId} />
    </>
  );
}

export default ProductPage;
