export default function CategoryCardsHome({ category }) {
  return (
    <>
      <div className="card">
        <img
          className="img-fluid"
          style={{ width: "100%", height: "260px" }}
          src={category.image}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title text-center">{category.name}</h5>
        </div>
      </div>
    </>
  );
}
