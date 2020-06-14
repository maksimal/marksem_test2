const defaultState = {
  typePrice: 40000,
  style: 'start',
  rentPrice: 90,
  useDays: 5,
  counterPrice: 7,
  servicePrice: 5,
  rentLandPrice: 90
}

export default function calculation(state = defaultState, action) {
  switch (action.type) {
    case 'SET_TYPE_PTICE':
      return {
        ...state,
        typePrice: action.payload
      };
    case 'SET_RENT_PRICE':
      return {
        ...state,
        rentPrice: action.payload
      };
    case 'SET_DAYS_AMMOUNT':
      return {
        ...state,
        useDays: action.payload
      };
    case 'SET_COUNTER_PRICE':
      return {
        ...state,
        counterPrice: action.payload
      };
    case 'SET_SERVICE_PRICE':
      return {
        ...state,
        servicePrice: action.payload
      }
    case 'SET_STYLE':
      return {
        ...state,
        style: action.payload
      }
    case 'SET_RENT_LAND_PRICE':
      return {
        ...state,
        rentLandPrice: action.payload
      }
    default:
      return state;
  }
}