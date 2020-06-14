import React, { useEffect } from 'react';
import ColorsGroup from './../components/ColorsGroup/ColorsGroup';
import OptionsGroup from '../components/OptionsGroup/OptionsGroup';
import { Tabs } from "../components/Tabs/Tabs"
import { TabsItem } from './../components/Tabs/Tabs';
import Tip from "./../components/Tip/Tip";
import Checkbox from './../components/Checkbox/Checkbox';
import Constructor from './../components/Constructor/Constructor';
import { setHousesData, setHouseToShow } from './../actions/housesActions';
import { useSelector, useDispatch } from "react-redux";
import Button from './../components/shared/Button/Button';
import clsx from 'clsx';
import { useState } from 'react';
import  ToggleHouseBuilderButton  from './../components/ToggleHouseBuilderButton/ToggleHouseBuilderButton';

const Sandbox = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHousesData())
  }, [])
  
  return (
    <div className="container">
      <div style={{ width: "100%", height: "300px", backgroundColor: "grey", position: "relative" }}>
        <ToggleHouseBuilderButton text="Choose" buttonType="main" houseType="Marksem M-2" style={{ position: "absolute", bottom: "0", right: "0" }}/>
      </div>
      <Constructor houseType="Marksem M-2" />
    </div>
  );
}

export default Sandbox;
