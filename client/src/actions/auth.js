import * as api from "../api";
import { signUp } from "../api";
import axios from "axios";

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log(data);
    dispatch({ type: "AUTH", data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    console.log(data);
    dispatch({ type: "AUTH", data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (config) => async (dispatch) => {
  try {
    const { data } = await api.getUserInfo(config);
    dispatch({ type: "GET_USER", data });
  } catch (err) {
    console.log(err);
  }
};
