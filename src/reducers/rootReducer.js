import { combineReducers } from 'redux';
import housesData from './housesData';
import selectedOptions from "./selectedOptions";
import selectedTab from "./selectedTab";
import houseBuilder from "./houseBuilder";
import activeHouseCategoryTab from "./activeHouseCategoryTab"
import calculation from "./calcReducer";


export default combineReducers({
  housesData,
  selectedTab,
  activeHouseCategoryTab,
  houseBuilder,
  selectedOptions,
  calculation
});