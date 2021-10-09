import * as api from "../api";

export const getProduct = (page, filter) => async (dispatch) => {
  try {
    const { data } = await api.getProduct(page, filter);
    console.log(filter);
    console.log(data.data);
    dispatch({ type: "GET_PRODUCTS", data });
  } catch (error) {
    console.log(error);
  }
};
