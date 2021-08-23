import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { fetchOrders } from "../../../store/actions/cartActions";
import OrderItem from "../OrderItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OrderPage() {
  const user = useSelector((state) => state.authReducer.user);
  const orders = useSelector((state) => state.cartReducer.orders);
  const userAddress = useSelector((state) => state.authReducer.user_detail);
  const dispatch = useDispatch();
  const orderItems = orders.map((order) => (
    <OrderItem item={order} userAddress={userAddress.user_address} />
  ));

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (!user) return <Redirect to="/" />;
  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="container mt-5" style={{ height: "50vh" }}>
        <div className="row justify-content-center mt-5">
          <h1>Your Orders</h1>
        </div>
        <div className="row mt-5 border-bottom">
          <div className="col-3">
            <h5>Product</h5>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-center ">
              <h5>Location</h5>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex justify-content-between">
              <h5>Status</h5>
              <h5>Total</h5>
            </div>
          </div>
        </div>
        {orders.length === 0 ? (
          <div
            className="row d-flex justify-content-center align-items-center "
            style={{ height: "50vh" }}
          >
            <div className="text-center">
              <h3>No Orders Pending</h3>
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
          <>{orderItems}</>
        )}
      </div>
    </>
  );
}
