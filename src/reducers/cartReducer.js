export default function cartReducer(
  state = [], action) {
  switch (action.type) {
    case "LOAD_CART":
      console.log("cart items being loaded: ", action.payload)
      return [...action.payload];
      break;
    case "ADD_TO_CART":
      return [...state, action.payload];
      break;
    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload.id)
      break;
    case "CLEAR_CART":
      return [];
      break;
    case "LOGOUT":
      return [];
      break;
    default:
      return state;
  }
}
