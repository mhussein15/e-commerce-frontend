import instance from "./instance";

export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await instance.get("/category");
    dispatch({
      type: "FETCH_CATEGORIES",
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
