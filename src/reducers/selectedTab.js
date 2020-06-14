import * as types from "../constants/types";

export default (state = "", action = {}) => {

  const tab = action.payload;

  switch (action.type) {
    case types.SET_ACTIVE_TAB:
      return tab

    default:
      return state
  }
}