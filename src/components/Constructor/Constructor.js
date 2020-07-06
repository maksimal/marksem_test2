import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { Link } from 'react-router-dom'

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
import ColorsFamily from './../ColorsFamily/ColorsFamily';
import { useState } from 'react';
import Modal from './../Modal/Modal';
import ConfirmHouseForm from './../ConfirmHouseForm/ConfirmHouseForm';
import TipModal from './../TipModal/TipModal';

const Constructor = ({ house }) => {

  const dispatch = useDispatch();
  const [showConfirmHouseModal, setShowConfirmHouseModal] = useState(false);
  const [showConfirmedHouseModal, setShowConfirmedHouseModal] = useState(false);

  // >>>> Get selected (active values)
  const { selectedTab, selectedOptions } = useSelector(state => state);
  const selectedHouseType = selectedOptions[house.houseType] || {};
  const {
    house_area,
    complectation,
    walls_color,
    furniture_color,
    interior_style,
    exterior_material,
    exterior_material_color,
    isTerrace
  } = selectedHouseType;
  const { houseToShow } = useSelector(({ houseBuilder }) => houseBuilder);
  // <<<< Get selected (active values)

  // Get matching variants from json based on selected options:
  const planningVariant = getSelectedPlanningVariant();
  const exteriorVariant = getSelectedExteriorVariant();
  const interiorVariant = getSelectedInteriorVariant();

  function getHousePrice() {
    return (
      +planningVariant.planning_price +
      +exteriorVariant.exterior_price +
      +interiorVariant.interior_price
    ).toString();
  }

  function getImages() {
    switch (selectedTab) {
      case "Planning":
        try {
          return planningVariant.image_urls
        } catch (e) {
          console.log("no such combination in json");
          console.log(e)
        }

        return planningVariant.image_urls

      case "Exterior":
        try {
          return exteriorVariant.image_urls
        } catch (e) {
          console.log("no such combination in json");
          console.log(e)
        }

        return exteriorVariant.image_urls

      case "Interior":
        try {
          return interiorVariant.image_urls
        } catch (e) {
          console.log("no such combination in json");
          console.log(e)
        }

        return interiorVariant.image_urls

      default:
        return []
    }
  }

  //>>>>>> Functions that find matching data from JSON based on selected options:

  function getSelectedPlanningVariant() {
    const planningVariant = house.planning_variants
      .find(variant =>
        variant.house_area === house_area &&
        variant.complectation === complectation
      )

    return planningVariant || {};
  }

  function getSelectedExteriorVariant() {
    const exteriorVariant = house.exterior_variants
      .find(variant =>
        variant.exterior_material === exterior_material &&
        variant.exterior_material_color === exterior_material_color &&
        variant.terrace === selectedHouseType.isTerraceOption
      );

    return exteriorVariant || {};
  }

  function getSelectedInteriorVariant() {
    const interiorVariant = house.interior_variants
      .find(variant =>
        variant.walls_color === walls_color &&
        variant.furniture_color === furniture_color &&
        variant.interior_style === interior_style
      )

    return interiorVariant || {};
  }

  //<<<<<<< Functions that find matching data from JSON based on selected options:



  const constructorClasses = clsx(
    "constructor",
    houseToShow !== house.houseType && "constructor-hidden"
  );

  if (!house) return <div className={constructorClasses}>...Loading</div>
  return (
    <div className={constructorClasses}>
      <div className="house-main-props">
        <div className="house-main-props-icon">
          <img src="./img/persons-in-house.png" alt="persons-in-house" />
        </div>
        <div className="house-main-props-icon">
          <span >
            {
              planningVariant.house_area
            }
            m
            <sup style={{ fontSize: "12px" }}>2</sup>
          </span>
        </div>
        <div className="house-main-props-icon">
          <span className="house-main-props-icon-number">
            {
              planningVariant.bathrooms
            }
          </span>
          <svg width="30px" height="30px" className="extra-info-icon">
            <use href="./icons-sprite.svg#bathroom" />
          </svg>
        </div>
        <div className="house-main-props-icon">
          <span className="house-main-props-icon-number">
            {
              planningVariant.rooms
            }
          </span>
          <svg width="30px" height="30px" className="extra-info-icon">
            <use href="./icons-sprite.svg#bedroom" />
          </svg>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="selected-house-data">
          <PhotoForConstructor
            images={getImages()}
            title={house.houseType}
          />
          <div className="selected-house-values">
            <div className="selected-house-values-1">
              <div className="house-type">
                <div className="house-type-name">
                  {
                    house.houseType
                  }
                </div>
                <div className="house-type-code">
                  {
                    house.code
                  }
                </div>
              </div>
              <div className="price">
                <span className="price-text">Price:</span>
                <span className="price-value">
                  {
                    getHousePrice()
                  }
                  &euro;
                </span>
              </div>
            </div>
            <div className="selected-house-values-2">
              <div className="extra-info">
                <span>Bathrooms:</span>
                <svg width="24px" height="24px" className="extra-info-icon">
                  <use href="./icons-sprite.svg#bathroom" />
                </svg>
                <span>
                  {
                    planningVariant.bathrooms
                  }
                </span>
              </div>
              <div className="extra-info">
                <span>Bedrooms:</span>
                <svg width="24px" height="24px" className="extra-info-icon">
                  <use href="./icons-sprite.svg#bedroom" />
                </svg>
                <span>
                  {
                    planningVariant.rooms
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="settings-block" style={{ maxWidth: "50%" }}>

          <Tabs onChangeTabAction={tabsActionsRedux.setActiveTab}>

            <TabsItem label="Exterior">
              <div className="tabs-item-description" style={{ display: "inline-block" }}>
                {
                  fromHousesData.getHouseDescription(house, "2")
                }

                {/* <Tip iconUrl="./img/icons/info-icon.png" position="bottom">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, aperiam.
                </Tip> */}

                <TipModal>
                  <p>Оберіть з даного конструктора деталі для обраного будинку. </p>
                  <p>У <span style={{ color: "#254A93" }}>ПЛАНУВАННІ</span>- оберіть комплектацію будинку та його площу.</p>
                  <p>Розділ <span style={{ color: "#254A93" }}>ЕКСТЕР'ЄР</span> допоможе Вам обрати матеріал фасаду, та його колір. </p>
                  <p>У розділі <span style={{ color: "#254A93" }}>ІНТЕР'ЄР</span> обирайте стиль у будинку та колір меблів </p>
                  <br />

                  <sup style={{ color: "grey", fontWeight: "12px" }}>*</sup>
                  <span style={{ color: "grey", fontWeight: "12px" }}>Залежить від обраної комплектації. В комплектації START Ви обираєте лише будинок, без внутрішнього додатку ( меблів, тощо).</span>
                </TipModal>

              </div>
              <div className="colorgroup-wrapper">
                <ColorsFamily
                  colorsGroupArray={fromHousesData.getExteriorColors(house)}
                  house={house}
                />
              </div>

              {fromHousesData.getIsTerraceOption(house) &&
                <div style={{ display: "flex" }}>
                  <Checkbox
                    labelText="Терасса:"
                    checked={isTerrace}
                    onClick={(optionValue) => dispatch(setOption(house.houseType, "isTerraceOption", optionValue))}
                  />

                  {/* <Tip iconUrl="./img/icons/info-icon.png" position="bottom">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, aperiam.
                </Tip> */}

                  <TipModal>
                    <p>Оберіть будинок з терасою або без. </p>
                    <br />
                    <p>Обираючи будинок з терасою менеджер зв'яжеться с Вами та допоможе обрати терасу з каталогу, що буде гармонійно вписуватись у дизайн та додавати затишку у майбутній дім</p>

                    <br />

                    <sup style={{ color: "grey", fontWeight: "12px" }}>*</sup>
                    <span style={{ color: "grey", fontWeight: "12px" }}>Ціна може змінюватись, залежно від обраного стилю тераси. На сайті ціна враховується з терасою “ВІДКРИТОГО” типу.</span>
                  </TipModal>


                </div>
              }
            </TabsItem>

            <TabsItem label="Planning">
              <div className="tabs-item-description">
                {
                  fromHousesData.getHouseDescription(house, "1")
                }
              </div>
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
              <div className="tabs-item-description">
                {
                  fromHousesData.getHouseDescription(house, "3")
                }
              </div>
              <OptionsGroup
                title="Стиль интерьера"
                optionName="interior_style"
                houseType={house.houseType}
                optionValues={fromHousesData.getInteriorOptionsList(house, "interior_style")}
              />

              <div className="colorgroup-wrapper">
                <ColorsGroup
                  title="Колір фасаду стін"
                  optionName="walls_color"
                  selectDefaultColor
                  houseType={house.houseType}
                  colors={fromHousesData.getInteriorOptionsList(house, "walls_color")}
                />
                <ColorsGroup
                  title="Колір меблів та текстилю"
                  optionName="furniture_color"
                  selectDefaultColor
                  houseType={house.houseType}
                  colors={fromHousesData.getInteriorOptionsList(house, "furniture_color")}
                />
              </div>
            </TabsItem>

          </Tabs>

          <div className="actions-block">
            <Button
              onClick={() => setShowConfirmHouseModal(true)}
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
      <p className="house-description">
        {
          fromHousesData.getHouseDescription(house, "4")
        }
      </p>
      <h4 className="house-description-title">Деатали будинку</h4>
      <p className="house-description">
        {
          fromHousesData.getHouseDescription(house, "5")
        }
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ToggleHouseBuilderButton
          text="Згорнути"
          buttonType="main"
          style={{ marginTop: "40px" }}
        />
      </div>

      {
        showConfirmHouseModal &&
        <Modal
          width="90%"
          onClose={() => setShowConfirmHouseModal(false)}
        >
          <div className="confirm-house-modal">
            <h2 className="confirm-house-modal__title">{house.houseType}</h2>
            <div className="confirm-house-modal__main-data">
              <div className="photo-block">
                <PhotoForConstructor
                  images={getImages()}
                  title={house.houseType}
                />
                <p style={{color: "grey", fontSize: "14px", marginTop: "30px"}}><sup>*</sup>Обробка замовлення проводиться в робочі години</p>

              </div>
              <div className="confirm-house-modal__description">
                <div className="confirm-house-modal__selected-options">
                  <div>
                    <div className="confirm-house-modal__option">
                      <span>Complactation - </span>
                      <span className="confirm-house-modal__option-value">
                        {complectation}
                      </span>
                    </div>
                    <div className="confirm-house-modal__option">
                      <span>Exterior - </span>
                      <span className="confirm-house-modal__option-value">
                        {exterior_material}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="confirm-house-modal__option">
                      <span>Area - </span>
                      <span className="confirm-house-modal__option-value">
                        {house_area}
                      </span>
                    </div>
                    <div className="confirm-house-modal__option">
                      <span>Interior - </span>
                      <span className="confirm-house-modal__option-value">
                        {interior_style}
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <p style={{ lineHeight: "27px" }}>Перевірте правильність обраного будинку та заповніть поля нижче. Наш менеджер зв'яжеться з Вами у найближчий час <sup>*</sup></p>

                <ConfirmHouseForm />

                <div className="confirm-house-modal__footer">
                  <div>
                    <p>Price</p>
                    <p className="confirm-house-modal__price">{getHousePrice()}&euro;</p>
                  </div>
                  <Button
                    onClick={() => {
                      setShowConfirmedHouseModal(true);
                      setShowConfirmHouseModal(false);
                    }}
                    text="Замовити"
                    classList="btn-main"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>}
      {showConfirmedHouseModal &&
        <Modal
          width="90%"
          onClose={() => setShowConfirmedHouseModal(false)}
        >
          <div style={{ textAlign: "center", padding: "30px" }}>
            <h3 style={{ fontWeight: "bold", textTransform: "uppercase" }}>Вітаємо!</h3>
            <br />
            <br />
            <p style={{ width: "630px" }}>Менеджер зателефонує Вам найближчим часом. Можете поки ознайомитись з іншими продуктами MARKSEM</p>
            <br />
            <br />
            <Link to={'/'}>
              <Button
                onClick={() => {
                  setShowConfirmedHouseModal(false);
                }}
                text="На головну"
                classList="btn-main"
              />
            </Link>

          </div>
        </Modal>
      }

    </div>
  )
}

export default Constructor;