import { DARK_MODE } from "../Actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case DARK_MODE:
      return { ...state, darkMode: action.payload };
    default:
      console.log(state);
      return state;
  }
}
