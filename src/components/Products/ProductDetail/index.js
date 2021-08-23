import { Redirect, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addProductToCart } from "../../../store/actions/cartActions";
import { useHistory } from "react-router-dom";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const productSlug = useParams().productSlug;
  const dispatch = useDispatch();
  const history = useHistory();
  const product = useSelector((state) =>
    state.productReducer.products.find(
      (product) => product.slug === productSlug
    )
  );

  const user = useSelector((state) => state.authReducer.user);
  const handleAdd = (id, history) => {
    const newItem = { quantity, product: id };
    dispatch(addProductToCart(newItem));
    history.replace("/products");
  };
  if (!product) return <Redirect to="/products" />;

  return (
    <>
      <div className="container mt-5 ">
        <Link
          className="btn btn-sm btn-outline-dark"
          style={{ width: "5%" }}
          to="/products"
        >
          <i class="fas fa-long-arrow-alt-left"></i>
        </Link>
        <div className="row py-3">
          <div className="col-6  d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-5 offset-1">
            <h1>{product.name}</h1>
            <h5 className="font-weight-bold">{product.price} KWD</h5>

            <div className="mt-3 mb-3">
              <label for="Quantity-product-template">Quantity</label>
              <input
                className="text-center ml-2"
                type="number"
                name="quantity"
                min="1"
                defaultValue="1"
                pattern="[0-9]*"
                style={{ width: "20%" }}
                onChange={(event) => setQuantity(+event.target.value)}
                disabled={user ? false : true}

              />
            </div>
            <button
              class="btn btn-dark"
              onClick={() => handleAdd(product.id, history)}
              disabled={user ? false : true}
            >
              Add to Cart
            </button>
            {user ? (
              ""
            ) : (
              <Link
                className="ml-3 text-danger"
                style={{ textDecoration: "underline" }}
                to="/signup"
              >
                SignIn or SignUp
              </Link>
            )}
            <p className="lead mt-4">{product.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
