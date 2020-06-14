import React from 'react';
import * as types from "../constants/types";

export function setActiveHouseCategoryTab(tab) {  

  return async dispatch => {
    dispatch({
      type: types.SET_ACTIVE_HOUSE_CATEGORY_TAB,
      payload: tab
    })
  }
}