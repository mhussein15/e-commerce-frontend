import { Route, Switch } from "react-router";
import CartPage from "../Cart/CartPage";
import Home from "../Home";
import OrderPage from "../Orders/OrdersPage";
import ProductDetail from "../Products/ProductDetail";
import ProductPage from "../Products/ProductsPage";
import AuthPage from "../User/AuthPage/index";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/products/:productSlug" component={ProductDetail} />
        <Route path={"/products"} component={ProductPage} />
        <Route path={"/cart"} component={CartPage} />
        <Route path={"/orders"} component={OrderPage} />
        <Route path={"/signup"} component={AuthPage} />
        <Route path={"/"} component={Home} />
      </Switch>
    </>
  );
}
