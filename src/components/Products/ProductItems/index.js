import { Link } from "react-router-dom";
import { ProductCard, ProductCardText } from "./styles";

const ProductItem = ({ product }) => {
  return (
    <ProductCard className="card p-3">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/products/${product.slug}`}
      >
        <img
          className="img-fluid p-3"
          style={{ width: "100%", height: "250px" }}
          src={product.image}
          alt=""
        />

        <div className="mt-3 row justify-content-around ">
          <ProductCardText className="font-weight-bold">
            {product.name}
          </ProductCardText>
          <ProductCardText className="font-weight-bold">
            {product.price} KWD
          </ProductCardText>
        </div>
      </Link>
    </ProductCard>
  );
};

export default ProductItem;
