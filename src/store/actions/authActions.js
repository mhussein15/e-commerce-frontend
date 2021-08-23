import instance from "./instance";
import decode from "jwt-decode";
import { toast } from "react-toastify";

const setUser = (access) => async (dispatch) => {
  localStorage.setItem("token", access);
  instance.defaults.headers.common.Authorization = `Bearer ${access}`;
  dispatch(fetchUserInfo());
  dispatch({
    type: "SET_USER",
    payload: {
      token_info: decode(access),
    },
  });
};

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/auth/signup", newUser);
      localStorage.setItem("token", res.data.access);
      dispatch(setUser(res.data.access));
      history.replace("/");
      toast.success("Account Created Successfully")
    } catch (error) {
      toast.error("Username Taken Already! Try New One");
    }
  };
};

export const signin = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/auth/signin", user);
      localStorage.setItem("token", res.data.access);
      dispatch(setUser(res.data.access));
      history.replace("/");
    } catch (error) {
      toast.error("Incorrect username/password combination");
    }
  };
};

export const fetchUserInfo = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/auth/detail");
      dispatch({
        type: "FETCH_USER",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const signout = (history) => {
  localStorage.removeItem("token");
  delete instance.defaults.headers.common.Authorization;
  history.replace("/");
  return {
    type: "CLEAR_INFO",
  };
};

export const checkForToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime <= user.exp + currentTime) {
      dispatch(setUser(token));
    } else {
      localStorage.removeItem("token");
      dispatch(signout());
    }
  }
};
