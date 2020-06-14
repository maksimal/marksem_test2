import * as types from "../constants/types";

export default (state = {}, { type, payload } = {}) => {

  switch (type) {
    case types.SET_OPTION:
      const {houseType, optionName, optionValue} = payload;
      const options = state[houseType];
      return {
        ...state,
        [houseType]: {
          ...options,
          [optionName]: optionValue
        }
      };

    default:
      return state
  }
}