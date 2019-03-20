import { API_ROOT, HEADERS } from "../constants";

export const loadCart = (order_items) => {
  return {type: "LOAD_CART", payload: order_items}
}

export const getCart = () => {
  return (dispatch) => {
    return fetch(API_ROOT + 'orders')
    .then(res => res.json())
    .then(res => dispatch(loadCart(res)))
    .catch(console.error)
  }
}

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART", payload: product
  }
}

export const addItemToCart = (item) => {
  return (dispatch, getState) => {
    return fetch(API_ROOT + 'order_items', {
      method: "POST",
      headers: {...HEADERS,
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        order_id: getState().order.id,
        product_id: item.id
      })
    })
    .then(res => res.json())
    .then(res => {
      dispatch(addToCart(res));
    })
  }
}

export const removeItemFromCart = (item) => {
  return (dispatch) => {
    return fetch(API_ROOT + 'order_items/' + item.id, {
      method: "DELETE",
      headers: {...HEADERS,
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    })
    .then(res => console.log("DELETE res: ", res))
    .then(dispatch(removeFromCart(item)))
  }
}
export const removeFromCart = (item) => {
  return {
    type: "REMOVE_FROM_CART", payload: item
  }
}

export const clearCart = () => {
  return {
    type: "CLEAR_CART", payload: null
  }
}
