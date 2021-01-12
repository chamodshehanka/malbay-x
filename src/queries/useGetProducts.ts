import { useQuery } from "react-query";
import { Product_API } from "../api/product";

const PRODUCT_LIST = "PRODUCT_LIST";

export function useGetProducts() {
  return useQuery(PRODUCT_LIST, Product_API.getAllProducts);
}
