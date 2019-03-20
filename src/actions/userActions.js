import { API_ROOT, HEADERS } from "../constants";
import { createOrLoadLastOrder } from '../actions/orderActions';

export const login = (userLogin) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: userLogin.username,
        password: userLogin.password
      })
    })
    .then(res => res.json())
    // .then(console.log)
    .then(res => {
      console.log("RES: ", res);
      if (res.message === "Please log in") {
        return "nope login didn't work";
      }
      localStorage.setItem("token", res.jwt);
      dispatch(getUserData());
    })
  }
}

export const getUserData = () => {
  console.log(`hiya`);
  return (dispatch) => {
    return fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        ...HEADERS,
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    // .then(res => console.log("the load fetch: ", res))
    .then(res => {
      dispatch(loadUser(res));
      dispatch(createOrLoadLastOrder())
      console.log("heyyy you got here user fetch successful");
    })
  }
}

const loadUser = (userObj) => {
  return {type: "LOAD_USER", payload: userObj}
}

export const logout = () => {
  return {type: "LOGOUT", payload: null}
}
