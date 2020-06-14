export default (state = { houses: [] }, action = {}) => {
  switch (action.type) {
    case 'SET_HOUSES_DATA':
      return ({
        ...state,
        houses: action.payload.houses
      });
    default:
      return state
  }
}

// Selectors. See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

export function getPlanningOptionsList({ planning_variants }, optionName) {
  return [...new Set(planning_variants.map(variant => variant[optionName]))];
}

export function getInteriorOptionsList({ interior_variants }, optionName) {
  return [...new Set(interior_variants.map(variant => variant[optionName]))];
}

export function getHouseDescription(house, descriptionIndex) {
  return house[`description${descriptionIndex}`]
}

export function getExteriorColors({ exterior_variants }) {
  let colorGroup = [];

  exterior_variants.map(({ exterior_material, exterior_material_color }) => {
    const foundMaterial = colorGroup.find(({ material }) => material === exterior_material);
    if (foundMaterial && !foundMaterial.colors.find(color => color == exterior_material_color)) {
      foundMaterial.colors.push(exterior_material_color)
    } else if (!foundMaterial) {
      colorGroup.push({
        material: exterior_material,
        colors: [exterior_material_color]
      })
    }
  });

  return colorGroup
}

export function getIsTerraceOption(house) {
  return house.isTerraceOption
}