import { API_ROOT, HEADERS } from "../constants";
import { loadCart, clearCart } from "./cartActions";
import { getUserData } from "./userActions";

export const placeOrder = order => {
  return (dispatch, getState) => {
    return fetch(API_ROOT + "orders/" + getState().order.id, {
      method: "PATCH",
      headers: {
        ...HEADERS,
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        completed: true
      })
    })
      .then(res => res.json())
      .then(console.log)
      .then(dispatch(clearCart()))
      .then(dispatch(createNewOrder()));
  };
};

export const createOrLoadLastOrder = () => {
  return (dispatch, getState) => {
    if (Object.keys(getState().user).length > 0) {
      const user = getState().user;
      if (user.orders.length) {
        dispatch(loadOrCreateOrder(user.orders[user.orders.length - 1]));
      } else {
        dispatch(createNewOrder());
      }
    }
    // else {
    //   // if just reloaded >
    //   dispatch(getUserData())
    //   .then(x => {
    //     const user = getState().user;
    //     if (user.orders.length) {
    //       dispatch(loadOrCreateOrder(user.orders[user.orders.length - 1]))
    //     } else {
    //       dispatch(createNewOrder())
    //     }
    //   })
    // }
  };
};

const loadOrCreateOrder = order => {
  console.log("latest order from user is:", order);
  return dispatch => {
    if (order.length === 0 || order.completed) {
      console.log("yeh");
      dispatch(createNewOrder());
    } else {
      console.log("bah");
      dispatch(loadOrder(order));
      // .then --> ..?
      dispatch(loadCart(order.order_items));
    }
  };
};

export const createNewOrder = () => {
  return (dispatch, getState) => {
    return fetch(API_ROOT + "orders", {
      method: "POST",
      headers: {
        ...HEADERS,
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        user_id: getState().user.id
      })
    })
      .then(res => res.json())
      .then(res => console.log("new order: ", res))
      .then(res => dispatch(getUserData()));
  };
};

const loadOrder = order => {
  return dispatch => {
    dispatch({ type: "LOAD_ORDER", payload: order });
  };
};
