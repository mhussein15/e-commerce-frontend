import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signout } from "../../store/actions/authActions";
import { NavBarLinks } from "./styles";
import { clearCart } from "../../store/actions/cartActions";
export default function Navbar() {
  const user = useSelector((state) => state.authReducer.user);
  const userDetail = useSelector((state) => state.authReducer.user_detail);
  const cartItems = useSelector((state) => state.cartReducer.items);
  const cartItemsQuantity = cartItems.reduce(
    (total, i) => total + i.quantity,
    0
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSignout = (history) => {
    dispatch(clearCart());
    dispatch(signout(history));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid d-flex align-items-baseline">
        <Link to={"/"} className="navbar-brand mr-3 font-weight-bold">
          Beyond
        </Link>
        <ul className="navbar-nav mr-auto">
          <NavBarLinks className="nav-item mr-3">
            <Link className="nav-link" to={`/products`}>
              Products
            </Link>
          </NavBarLinks>
        </ul>

        <div>
          <ul className="navbar-nav">
            {user === null ? (
              <>
                <NavBarLinks className="nav-item mr-3">
                  <Link className="nav-link" to={`/signup`}>
                    Signin
                  </Link>
                </NavBarLinks>
              </>
            ) : (
              <>
                <NavBarLinks className="nav-item mr-3">
                  <li className="nav-link font-weight-bold">
                    {userDetail === null ? " " : userDetail.username}
                  </li>
                </NavBarLinks>
                <NavBarLinks className="nav-item mr-3 ">
                  <Link
                    className="nav-link d-flex align-items-center justify-content-center p-0"
                    to={`/cart`}
                  >
                    <i class="fas fa-shopping-cart"></i>{" "}
                    <p class="badge badge-light">
                      {cartItems.length === 0 ? "0" : cartItemsQuantity}
                    </p>
                  </Link>
                </NavBarLinks>
                <NavBarLinks className="nav-item mr-3">
                  <Link className="nav-link" to={`/orders`}>
                    Orders
                  </Link>
                </NavBarLinks>
                <NavBarLinks className="nav-item mr-3">
                  <Link
                    className="nav-link"
                    onClick={() => handleSignout(history)}
                  >
                    Logout
                  </Link>
                </NavBarLinks>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
