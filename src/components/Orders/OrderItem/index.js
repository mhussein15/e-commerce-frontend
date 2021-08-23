export default function OrderItem({ item, userAddress }) {
  return (
    <div className="row my-5 border-bottom pb-4">
      <div className="col-3 d-flex align-items-center">
        <div>
          {item.order_item.map((item) => (
            <h5>
              {item.product} -----{" "}
              <span className="font-weight-bold">{item.quantity}</span>{" "}
            </h5>
          ))}
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex justify-content-center ">
          <h5>
            {userAddress.address}---{userAddress.city},{userAddress.country}---
            {userAddress.postal_code}
          </h5>
        </div>
      </div>
      <div className="col-3 d-flex justify-content-between align-items-center ">
        <h5
          className={`font-weight-bold ${
            item.accepted === null
              ? ""
              : item.accepted
              ? "text-success"
              : "text-danger"
          }`}
        >
          {item.accepted === null ? (
            <>Pending</>
          ) : item.accepted ? (
            <>Accepted</>
          ) : (
            <>Declined</>
          )}
        </h5>
        <h5 className="font-weight-bold">{item.total} KWD</h5>
      </div>
    </div>
  );
}
