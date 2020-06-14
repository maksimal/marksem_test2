import React from 'react';
import "./ToggleHouseBuilderButton.scss";
import Button from './../shared/Button/Button';
import { toggleHouseBuilder } from './../../actions/housesActions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from "clsx";
import { useSelector } from 'react-redux';

export default function ({
    houseType,
    text,
    buttonType,
    ...attrs
  }) {

    const {houseToShow}= useSelector(({houseBuilder})=>houseBuilder);

    // const [hidden, setHidden] = useState(false);
    const dispatch = useDispatch();

    const classes = clsx(
      houseToShow === houseType && "hidden"
    )

    function handleClick(houseType) {
      dispatch(toggleHouseBuilder(houseType))
    }

    return (
      <div className="button-wrapper" className={classes} {...attrs}>
        <Button
          onClick={()=> handleClick(houseType)}
          text={text}
          classList={`btn btn-${buttonType}`}
          type={buttonType}
          ></Button>
      </div>
    )
  }
