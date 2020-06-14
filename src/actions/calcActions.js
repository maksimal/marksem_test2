/*
 * action types
 */

export const SET_TYPE_PTICE = 'SET_TYPE_PTICE';
export const SET_RENT_PRICE = 'SET_RENT_PRICE';
export const SET_DAYS_AMMOUNT = 'SET_DAYS_AMMOUNT';
export const SET_COUNTER_PRICE = 'SET_COUNTER_PRICE';
export const SET_SERVICE_PRICE = 'SET_SERVICE_PRICE';
export const SET_STYLE = 'SET_STYLE';
export const SET_RENT_LAND_PRICE = 'SET_RENT_LAND_PRICE';

export const setStyle = style => {
  return {
    type: SET_STYLE,
    payload: style
  }
}