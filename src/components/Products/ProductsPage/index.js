import { ProductWrapper, ProductTitle } from "./styles";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchBar from "../../SearchBar/index";
import ProductItem from "../ProductItems";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const products = useSelector((state) => state.productReducer.products);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const productList = products
    .filter((product) =>
      category === "" ? product : product.category.includes(+category)
    )
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => <ProductItem key={product.id} product={product} />);

  const categoriesOptions = categories.map((category) => (
    <option value={category.id}>{category.name}</option>
  ));
  return (
    <>
      <ToastContainer autoClose={2000} />
      <ProductTitle className="text-center mt-3">Products</ProductTitle>
      <div className="container">
        <div className="row d-flex align-items-baseline">
          <div className="col-10">
            <SearchBar className="mt-3" setQuery={setQuery} />
          </div>
          <div className="col-2">
            <select
              className="custom-select"
              onChange={(event) => setCategory(event.target.value)}
            >
              <option selected value="">
                All
              </option>
              {categoriesOptions}
            </select>
          </div>
        </div>
      </div>
      <ProductWrapper className="mt-2 p-5">{productList}</ProductWrapper>
    </>
  );
};

export default ProductPage;
