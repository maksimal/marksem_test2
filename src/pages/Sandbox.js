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
import Modal from './../components/Modal/Modal';

const Sandbox = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHousesData())
  }, [])

  const [modalOpen, setModalOpen] = useState(false)
  
  return (
    <div >
      <button onClick={()=>setModalOpen(true)} >Open modal</button>
      <Modal
        isOpen={modalOpen}
        onClose={()=>setModalOpen(false)}
        width="50%"
      >
        <p style={{padding: "20px", width: "50%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sint pariatur perferendis aliquam rem voluptas molestias? Commodi possimus repudiandae fugit!</p>
      </Modal>
    </div>
  );
}

export default Sandbox;
