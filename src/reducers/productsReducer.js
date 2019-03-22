export default function productsReducer(state = [], action) {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return [...action.payload];
      break;
    default:
      return state;
  }
}
