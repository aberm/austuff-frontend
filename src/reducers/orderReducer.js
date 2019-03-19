export default function orderReducer(state={}, action) {
  switch (action.type) {
    case "LOAD_ORDER":
      console.log("order being loaded: ", action.payload);
      return {...action.payload}
      break;
    default:
      return state;
  }
}
