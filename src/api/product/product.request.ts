import { Product } from "../../models/Product";
import { apiInstance } from "../apiInstance";

export async function getAllProducts() {
  const PATH = "/product/list";
  try {
    const res = await apiInstance.get(PATH);
    const apiRes = res.data.data;

    return apiRes as Product[];
  } catch (e) {
    throw new Error("Failed to get All products");
  }
}

export async function getProductById(_queryKey: string, productId: string) {
  const PATH = `/product/get/${productId}`;

  try {
    const res = await apiInstance.get(PATH);
    const apiRes = res.data;

    return apiRes as Product;
  } catch (e) {
    throw new Error("Failed to get product by id");
  }
}
