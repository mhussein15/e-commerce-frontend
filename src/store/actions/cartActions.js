import instance from "./instance";
import { toast } from "react-toastify";

export const addProductToCart = (newItem) => {
  toast.success("Add to Cart");
  return {
    type: "ADD_TO_CART",
    payload: newItem,
  };
};

export const removeProductFromCart = (itemId) => ({
  type: "REMOVE_FROM_CART",
  payload: itemId,
});
export const addOneProductToCart = (newItem) => {
  return {
    type: "ADD_TO_CART",
    payload: newItem,
  };
};
export const deleteOneProductFromCart = (itemId) => ({
  type: "DELETE_ITEM_FROM_CART",
  payload: itemId,
});
export const clearCart = (itemId) => ({
  type: "CLEAR_CART",
  payload: itemId,
});

export const checkout = (orderItems, history) => async (dispatch) => {
  try {
    await instance.post("/orders/add", { order_item: orderItems });
    dispatch({
      type: "CLEAR_CART",
    });
    history.replace("/orders");
    toast.success("Ordered Has Been Placed!!!");
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const fetchOrders = () => async (dispatch) => {
  try {
    const res = await instance.get("/auth/order");
    dispatch({
      type: "FETCH_ORDERS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
