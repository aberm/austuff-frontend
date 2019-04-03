export default function cartReducer(state = [], action) {
  switch (action.type) {
    case "LOAD_CART":
      return [...action.payload];
      break;
    case "ADD_TO_CART":
      return [...state, action.payload];
      break;
    case "ADD_EXISTING_TO_CART":
      return [
        ...state.filter(item => item.id !== action.payload.id),
        action.payload
      ];
      break;
    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload.id);
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
