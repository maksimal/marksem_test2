import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';

import "./Constructor.scss";
import ColorsGroup from '../ColorsGroup/ColorsGroup';
import OptionsGroup from '../OptionsGroup/OptionsGroup';
import { Tabs } from "../Tabs/Tabs"
import { TabsItem } from '../Tabs/Tabs';
import Tip from "../Tip/Tip";
import Checkbox from '../Checkbox/Checkbox';
import Button from './../shared/Button/Button';
import PhotoForConstructor from './../PhotoForConstructor/index';
import * as fromHousesData from "../../reducers/housesData";
import { setOption } from '../../actions/housesActions';
import ToggleHouseBuilderButton from './../ToggleHouseBuilderButton/ToggleHouseBuilderButton';
import * as tabsActionsRedux from './../../actions/constructorTabsActions';

const Constructor = ({ houseType }) => {

  const dispatch = useDispatch();

  const house = useSelector(({ housesData }) => housesData.houses.find(house => house.houseType === houseType));
  const { selectedTab, selectedOptions } = useSelector(state => state);
  const selectedHouseType = selectedOptions[houseType] || {};
  const { house_area, complectation, walls_color, furniture_color, interior_style, isTerrace } = selectedHouseType;
  const { houseToShow } = useSelector(({ houseBuilder }) => houseBuilder);

  const constructorClasses = clsx(
    "constructor",
    houseToShow !== houseType && "constructor-hidden"
  );

  function getHousePrice() {
    //можно было бы эти константы получать один раз вне функций,
    //но проблема с тем, что house при первом рендере пустой, поэтому
    //эти функции запускаются уже внутри return блока этого компонента,
    //когда есть гарантия что в house уже есть данные (в рендере есть проверка: house && ...);
    const planningVariant = getSelectedPlanningVariant();
    const exteriorVariant = getSelectedExteriorVariant();
    const interiorVariant = getSelectedInteriorVariant();

    const planningPrice = planningVariant ? planningVariant.planning_price : "0";
    const exteriorPrice = exteriorVariant ? exteriorVariant.exterior_price : "0";
    const interiorPrice = interiorVariant ? interiorVariant.interior_price : "0";

    return +planningPrice + +exteriorPrice + +interiorPrice
  }

  function getBathroomsNumber() {
    const planningVariant = getSelectedPlanningVariant();
    const bathroomsNumber = planningVariant ? planningVariant.bathrooms : "0";

    return bathroomsNumber
  }

  function getRoomsNumber() {
    const planningVariant = getSelectedPlanningVariant();
    const roomsNumber = planningVariant ? planningVariant.rooms : "0";
    return roomsNumber
  }

  function getImages() {
    switch (selectedTab) {
      case "Planning":
        const planningVariant = getSelectedPlanningVariant();

        try {
          return planningVariant.image_urls
        } catch (e) {
          alert("no such combination in json");
          console.log(e)
        }

        return planningVariant ? planningVariant.image_urls : []

      case "Exterior":
        const exteriorVariant = getSelectedExteriorVariant();

        try {
          return exteriorVariant.image_urls
        } catch (e) {
          alert("no such combination in json");
          console.log(e)
        }

        return exteriorVariant ? exteriorVariant.image_urls : []

      case "Interior":
        const interiorVariant = getSelectedInteriorVariant();

        try {
          return interiorVariant.image_urls
        } catch (e) {
          alert("no such combination in json");
          console.log(e)
        }

        return interiorVariant ? interiorVariant.image_urls : []

      default:
        return []
    }
  }

  function getSelectedPlanningVariant() {
    const planningVariant = house.planning_variants
      .find(variant =>
        variant.house_area === house_area &&
        variant.complectation === complectation
      )

    return planningVariant;
  }

  function getSelectedExteriorVariant() {
    const exteriorVariant = house.exterior_variants
      .find(variant =>
        Object.keys(selectedHouseType).find(key => key === variant.exterior_material) &&
        variant.exterior_material_color === selectedHouseType[variant.exterior_material] &&
        variant.terrace === selectedHouseType.isTerraceOption
      );

    return exteriorVariant;
  }

  function getSelectedInteriorVariant() {
    const interiorVariant = house.interior_variants
      .find(variant =>
        variant.walls_color === walls_color &&
        variant.furniture_color === furniture_color &&
        variant.interior_style === interior_style
      )

    return interiorVariant;
  }



  if (!house) return <div className={constructorClasses}>...Loading</div>
  return (
    <div className={constructorClasses}>
      <div style={{ display: "flex" }}>
        <div className="selected-house-data" style={{ width: "50%", marginRight: "60px" }}>
          <PhotoForConstructor
            images={getImages()}
            title={house.houseType}
          />
          <div className="selected-house-values">
            <div className="selected-house-values-1">
              <div className="house-type">
                <div className="house-type-name">{house.houseType}</div>
                <div className="house-type-code">{house.code}</div>
              </div>
              <div className="price">
                <span className="price-text">Price:</span>
                <span className="price-value">{getHousePrice()}</span>
              </div>
            </div>
            <div className="selected-house-values-2">
              <div className="extra-info">
                <span>Bathrooms:</span>
                <svg width="24px" height="24px" className="extra-info-icon">
                  <use href="./icons-sprite.svg#bathroom" />
                </svg>
                <span>{getBathroomsNumber()}</span>
              </div>
              <div className="extra-info">
                <span>Bedrooms:</span>
                <svg width="24px" height="24px" className="extra-info-icon">
                  <use href="./icons-sprite.svg#bedroom" />
                </svg>
                <span>{getRoomsNumber()}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="settings-block" style={{ maxWidth: "50%" }}>

          <Tabs onChangeTabAction={tabsActionsRedux.setActiveTab}>

            <TabsItem label="Exterior">
              <div className="tabs-item-description">{fromHousesData.getHouseDescription(house, "2")}</div>
              <div className="colorgroup-wrapper">
                {
                  fromHousesData.getExteriorColors(house)
                    .map(({ material, colors }, i) =>
                      <ColorsGroup
                        key={i}
                        title={material}
                        optionName={material}
                        houseType={house.houseType}
                        colors={colors}
                      />)
                }
              </div>

              {fromHousesData.getIsTerraceOption(house) &&
                <div style={{ display: "flex" }}>
                  <Checkbox
                    labelText="Терасса:"
                    checked={isTerrace}
                    onClick={(optionValue) => dispatch(setOption(house.houseType, "isTerraceOption", optionValue))}
                  />
                  <Tip iconUrl="./img/icons/info-icon.png" position="bottom">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, aperiam.
                </Tip>
                </div>
              }
            </TabsItem>

            <TabsItem label="Planning">
              <div className="tabs-item-description">{fromHousesData.getHouseDescription(house, "1")}</div>
              <OptionsGroup
                title="Площа будинку"
                optionName="house_area"
                houseType={house.houseType}
                optionValues={fromHousesData.getPlanningOptionsList(house, "house_area")}
              />
              <OptionsGroup
                title="Комплектація"
                optionName="complectation"
                houseType={house.houseType}
                optionValues={fromHousesData.getPlanningOptionsList(house, "complectation")}
              />
            </TabsItem>

            <TabsItem label="Interior">
              <div className="tabs-item-description">{fromHousesData.getHouseDescription(house, "3")}</div>
              <OptionsGroup
                title="Стиль интерьера"
                optionName="interior_style"
                houseType={house.houseType}
                optionValues={fromHousesData.getInteriorOptionsList(house, "interior_style")}
              />

              <div className="colorgroup-wrapper">
                <ColorsGroup
                  title="Колір стін"
                  optionName="walls_color"
                  houseType={house.houseType}
                  colors={fromHousesData.getInteriorOptionsList(house, "walls_color")}
                />
                <ColorsGroup
                  title="Колір меблів"
                  optionName="furniture_color"
                  houseType={house.houseType}
                  colors={fromHousesData.getInteriorOptionsList(house, "furniture_color")}
                />
              </div>
            </TabsItem>

          </Tabs>

          <div className="actions-block">
            <Button
              onClick={() => { }}
              text="Купить"
              classList="btn-main" />
            <Button
              onClick={() => { }}
              text="Комплектация"
              classList="btn-main"
              style={{ backgroundColor: "white", color: "black", border: "1px solid #0A254C " }} />
          </div>
        </div>
      </div>


      <h4 className="house-description-title">Опис</h4>
      <p className="house-description">{fromHousesData.getHouseDescription(house, "4")}</p>
      <h4 className="house-description-title">Деатали будинку</h4>
      <p className="house-description">{fromHousesData.getHouseDescription(house, "5")}</p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ToggleHouseBuilderButton
          text="Згорнути"
          buttonType="main"
          style={{ marginTop: "40px" }}
        />
      </div>
    </div>
  )
}

export default Constructor;