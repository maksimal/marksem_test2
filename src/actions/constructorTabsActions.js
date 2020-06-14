import React from 'react';
import * as types from "../constants/types";

export function setActiveTab(tab) {  

  return async dispatch => {
    dispatch({
      type: types.SET_ACTIVE_TAB,
      payload: tab
    })
  }
}