export default (state = { houseToShow: "" }, action = {}) => {  
  switch (action.type) {    
    case 'TOGGLE_HOUSE_BUILDER': 
      const {houseType} = action.payload;    
      const currentHouseToShow = state.houseToShow;

      let houseToShow;
      if (currentHouseToShow === houseType) {
        houseToShow = "";
      } else {
        houseToShow = houseType
      }
      return ({
        ...state,
        houseToShow
      });
    default:
      return state
  }
}

