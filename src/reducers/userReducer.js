export default function userReducer (
  state = {}, action) {
  switch (action.type) {
    case "LOAD_USER":
      return {...state, ...action.payload};
      break;
    case "LOGOUT":
      return {};
      break;
    default:
      return state;
  }
}
