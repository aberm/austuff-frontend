import { API_ROOT, HEADERS } from "../constants";

export const loadProducts = products => {
  return { type: "LOAD_PRODUCTS", payload: products };
};

export const getProducts = () => {
  return dispatch => {
    console.log("TOKEN: ", localStorage.getItem("token"));
    return fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(res => dispatch(loadProducts(res)))
      .catch(console.error);
  };
};
