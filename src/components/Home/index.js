import {
  LandingPageSection,
  LandingPageCategoryCards,
  LandingPageProductCards,
  LandingPageIntro,
} from "./styles.js";
import { useSelector } from "react-redux";
import CategoryCardsHome from "../Category/CategoryCardHome/index.js";
import ProductItem from "../Products/ProductItems/index.js";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const products = useSelector((state) => state.productReducer.products);
  const categoriesList = categories.slice(0, 3).map((category) => (
    <CategoryCardsHome key={category.id} category={category} />
  ));
  const productList = products
    .slice(0, 4)
    .map((product) => <ProductItem product={product} />);
  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="container-fluid bg-light justify-content-center align-items-center d-flex">
        <LandingPageIntro>
          <div className="row justify-content-center">
            <div className="col-6 p-5">
              <img
                alt=""
                className="img-fluid"
                src="https://store.sony.com.au/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dw50ab96de/images/WH1000XM2B/WH1000XM2B.png"
              />
            </div>
            <div className="col-6 p-5 d-flex justify-content-center align-items-center">
              <div>
                <h1 className="text-black display-4">
                  Shop for the best headphones now
                </h1>
              </div>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              to={"/products"}
              className="btn btn-lg btn-outline-dark mt-2 w-25"
            >
              Shop Now
            </Link>
          </div>
        </LandingPageIntro>
      </div>
      <div className="container-fluid bg-light justify-content-center align-items-center d-flex">
        <LandingPageSection>
          <h1 className="text-center mt-5 p-4">Shop by Category</h1>
          <LandingPageCategoryCards className="row mt-3 p-5">
            {categoriesList}
          </LandingPageCategoryCards>
        </LandingPageSection>
      </div>
      <div className="container-fluid bg-dark justify-content-center align-items-center d-flex">
        <LandingPageSection>
          <h1 className="text-center text-white mt-5 p-4">Lastest Products</h1>
          <LandingPageProductCards className="row mt-3 p-5">
            {productList}
          </LandingPageProductCards>
        </LandingPageSection>
      </div>
    </>
  );
};

export default Home;
