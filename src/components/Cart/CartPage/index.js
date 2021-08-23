import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import { Link, useHistory, Redirect } from "react-router-dom";
import { checkout } from "../../../store/actions/cartActions";

export default function CartPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const items = useSelector((state) => state.cartReducer.items);
  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.authReducer.user);
  const userDetail = useSelector((state) => state.authReducer.user_detail);

  if (!user) return <Redirect to="/" />;

  const cartItems = items.map((item) => {
    for (let index = 0; index < products.length; index++) {
      if (products[index].id === item.product) {
        return {
          id: products[index].id,
          name: products[index].name,
          image: products[index].image,
          price: products[index].price,
          quantity: item.quantity,
        };
      }
    }
  });
  const cartItemsRows = cartItems.map((item) => <CartItem item={item} />);

  const handleCheckOut = (orderItems, history) => {
    dispatch(checkout(orderItems, history));
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center mt-5">
          <h1>Your Cart</h1>
        </div>
        {userDetail ? (
          <>
            <div className="row d-flex justify-content-end">
              <div>
                <h6>PickUp Location</h6>
                <div className="card p-2">
                  <p className="m-0 p-0">{userDetail.user_address.address}</p>
                  <p className="m-0 p-0">
                    {userDetail.user_address.city},
                    {userDetail.user_address.country}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          " "
        )}
        <div className="row mt-5 border-bottom">
          <div className="col-1 text-center">
            <h5>Product</h5>
          </div>
          <div className="col-5 offset-6">
            <div className="d-flex justify-content-between">
              <h5>Price</h5>
              <h5>Quantity</h5>
              <h5>Total</h5>
            </div>
          </div>
        </div>
        {items.length === 0 ? (
          <div
            className="row d-flex justify-content-center align-items-center "
            style={{ height: "50vh" }}
          >
            <div className="text-center">
              <h3>Your cart is currently empty.</h3>
              <Link
                style={{ textDecoration: "none" }}
                to={"/products"}
                className="btn btn-lg btn-dark mt-2"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <>
            {cartItemsRows}
            <div className="row my-5 d-flex justify-content-end">
              <button
                className="btn btn-outline-dark"
                onClick={() => handleCheckOut(items, history)}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
