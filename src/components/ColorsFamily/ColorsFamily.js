import React from 'react';
import { setOption } from "../../actions/housesActions"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ColorsGroup from "../ColorsGroup/ColorsGroup";
import { useState } from 'react';

const ColorsFamily = ({colorsGroupArray, house}) => {
  const dispatch = useDispatch();

  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  useEffect(() => {
    dispatch(setOption(house.houseType, "exterior_material", colorsGroupArray[0].material));
  }, [])

  function handleClick(material, i) {
    dispatch(setOption(house.houseType, "exterior_material", material));
    setActiveGroupIndex(i);
  }

  return (
    colorsGroupArray
      .map(({ material, colors }, i) =>
        <div
          key={i}
          className="color-group"
          onClick={()=>handleClick(material, i)}
        >
          <ColorsGroup            
            title={material}
            selectDefaultColor={i === 0 ? true : false}
            optionName="exterior_material_color"
            houseType={house.houseType}
            isGroupActive={activeGroupIndex === i}
            colors={colors}
          />
        </div>
      )
  );
}

export default ColorsFamily;
