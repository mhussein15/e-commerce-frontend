import React from "react";
import { useDispatch } from "react-redux";
import {
  addOneProductToCart,
  deleteOneProductFromCart,
  removeProductFromCart,
} from "../../../store/actions/cartActions";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const handleRemove = (itemId) => {
    dispatch(removeProductFromCart(itemId));
  };

  const handleAdd = (id) => {
    const newItem = { quantity: 1, product: id };
    dispatch(addOneProductToCart(newItem));
  };
  const handleDelete = (id) => {
    dispatch(deleteOneProductFromCart(id));
  };
  return (
    <>
      <div className="row mt-5 border-bottom pb-4">
        <div className="col-2">
          <img src={item.image} className="img-fluid" alt={item.name} />
        </div>
        <div className="col-5 d-flex align-items-center">
          <div>
            <h3 className="font-weight-bold">{item.name}</h3>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="col-5 d-flex justify-content-between align-items-center ">
          <h5 className="font-weight-bold">{item.price} KWD</h5>
          <div className="d-flex justify-content-center align-items-baseline">
            <button
              className="btn btn-sm btn-outline-dark mr-3"
              onClick={() => handleDelete(item.id)}
              disabled={item.quantity >= 2 ? false : true}
            >
              <i class="fa fa-minus" aria-hidden="true"></i>
            </button>

            <h5 className="font-weight-bold">{item.quantity}</h5>
            <button
              className="btn btn-sm btn-outline-dark ml-3"
              onClick={() => handleAdd(item.id)}
            >
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
          <h5 className="font-weight-bold">{item.price * item.quantity} KWD</h5>
        </div>
      </div>
    </>
  );
}
