import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ShopPage from "../pages/ShopPage/ShopPage";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/shop", component: ShopPage },
  { path: "/product", component: ProductPage },
  { path: "/cart", component: CartPage },
  { path: "/checkout", component: CheckoutPage },
];
