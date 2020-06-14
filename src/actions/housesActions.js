import React from 'react';
import getHousesData from "../services/tasks";
import * as types from "../constants/types";

export function setHousesData() {  

  return async dispatch => {
    const housesData = await getHousesData("./housesData.json");

    dispatch({
      type: types.SET_HOUSES_DATA,
      payload: housesData
    })
  }
}

export function setOption(houseType, optionName, optionValue) {
  return dispatch => dispatch({
    type: types.SET_OPTION,
    payload: {
      houseType,
      optionName,
      optionValue
    }
  })
}

export function toggleHouseBuilder(houseType) {
  return dispatch => dispatch({
    type: types.TOGGLE_HOUSE_BUILDER,
    payload: {
      houseType
    }
  })
}