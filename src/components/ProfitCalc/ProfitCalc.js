import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProfitCalc.scss";
import Range from "../shared/Range";
import Button from "../shared/Button/Button";
import * as action from "../../actions/calcActions";
import { setHousesData } from "../../actions/housesActions";
import Modal from "../Modal/Modal";

function ProfitCalc({ currency }) {
  let tempType = useRef();
  const [tab, setTab] = useState("shared");
  const [profit, setProfit] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.calculation);
  const { houses: dataHouse } = useSelector((state) => state.housesData);

  const dataPrice = dataHouse.map((house) => {
    return {
      type: house.houseType,
      price: house.priceRange,
    };
  });

  const getPriceRange = useCallback(() => {
    const priceRange = dataPrice.map((house) => {
      let min;
      let max;

      house.price.forEach((item) => {
        if (item.type === "start") {
          min = item.price;
        }

        if (item.type === "premium") {
          max = item.price;
        }
      });

      return { type: house.type, range: [min, max] };
    });

    return priceRange;
  }, [dataPrice]);

  const getHouseInRange = useCallback(value => {
    let result;

    try {
      result = getPriceRange()
        .find(item => value >= item.range[0] && value <= item.range[1])
        .type;

    } catch (error) {
      console.info("No house in this range");
    }

    return result;

  }, [getPriceRange]);

  const setHouseInRange = useCallback(() => {
    // debugger;
    const price = getHouseInRange(data.typePrice);
    dispatch(action.setType(price));
    if(price){
      tempType.current = price;
    }
    
  }, [data.typePrice]);

  const togglePopup = () => {
    setShowResult(!showResult);
  };

  const handlePriceTypeClick = (type) => {
    dispatch(action.setStyle(type));
    dataPrice.forEach((item) => {
      if (item.type === data.type) {
        const typeOpts = item.price.find((element) => element.type === type);
        dispatch(action.setPrice(typeOpts.price));
        dispatch(action.setCode(typeOpts.code));
      }
    });
  };

  const calculate = useCallback(() => {
    let income, exps;

    let {
      counterPrice,
      useDays,
      rentLandPrice,
      rentPrice,
      servicePrice,
    } = data;

    income = rentPrice * useDays;

    if (tab === "shared") {
      exps = (counterPrice + servicePrice) * 31 + rentLandPrice;
    }

    if (tab === "own") {
      exps = (counterPrice + servicePrice) * 31;
    }

    return income - exps;
  }, [data, tab]);

  useEffect(() => {
    const result = calculate();
    setProfit(result);
  }, [calculate]);

  useEffect(() => {
    setHouseInRange();
  }, [data.typePrice]);

  return (
    <section className="profit-calc">
      <div className="container">
        <h2 className="profit-calc__title">калькулятор дохідності</h2>
        <div className="profit-calc__tabs">
          <div
            className={
              tab === "shared" ? "profit-calc__tab active" : "profit-calc__tab"
            }
            onClick={() => setTab("shared")}
          >
            в парку marksem
          </div>
          <div
            className={
              tab === "own" ? "profit-calc__tab active" : "profit-calc__tab"
            }
            onClick={() => setTab("own")}
          >
            на своїй землі
          </div>
        </div>
        <div className="profit-calc__info">
          Виберіть відповідний варіант з зазначених даних:
        </div>
        <div className="profit-calc__wrapper">
          <div className="profit-calc__block">
            <div className="profit-calc__type">
              <div className="profit-calc__block-title">
                Будинок та комплектація:
                <span className="profit-calc__type-var">
                  {data.type || tempType.current} mobile house {data.code}
                </span>
              </div>
              <Range
                min={10000}
                max={100000}
                defaultValue={data.typePrice}
                showRange={false}
                measureSign={currency}
                action={action.SET_TYPE_PTICE}
              />
            </div>
            <div className="profit-calc__style">
              <Button
                onClick={() => handlePriceTypeClick("start")}
                classList={
                  data.style === "start"
                    ? "btn btn-simple active"
                    : "btn btn-simple"
                }
                text="start"
              />
              <Button
                onClick={() => handlePriceTypeClick("classic")}
                classList={
                  data.style === "classic"
                    ? "btn btn-simple active"
                    : "btn btn-simple"
                }
                text="classic"
              />
              <Button
                onClick={() => handlePriceTypeClick("comfort")}
                classList={
                  data.style === "comfort"
                    ? "btn btn-simple active"
                    : "btn btn-simple"
                }
                text="comfort"
              />
              <Button
                onClick={() => handlePriceTypeClick("premium")}
                classList={
                  data.style === "premium"
                    ? "btn btn-simple active"
                    : "btn btn-simple"
                }
                text="premium"
              />
            </div>
          </div>
          <div className="profit-calc__block">
            <div className="profit-calc__rent">
              <div className="profit-calc__block-title">
                Вартість оренди будинку за добу:
              </div>
              <Range
                min={30}
                max={500}
                defaultValue={data.rentPrice}
                showRange={true}
                measureSign={currency}
                action={action.SET_RENT_PRICE}
              />
            </div>
            <div className="profit-calc__day">
              <div className="profit-calc__block-title">
                Кількість завантажених днів в місяць:
              </div>
              <Range
                min={1}
                max={31}
                defaultValue={data.useDays}
                showRange={false}
                action={action.SET_DAYS_AMMOUNT}
              />
            </div>
          </div>
          <div className="profit-calc__block">
            <div className="profit-calc__counter">
              <div className="profit-calc__block-title">
                Плата за комунікації по лічильнику за добу:
              </div>
              <Range
                min={3}
                max={10}
                defaultValue={data.counterPrice}
                showRange={true}
                measureSign={currency}
                action={action.SET_COUNTER_PRICE}
              />
            </div>
            <div className="profit-calc__service">
              <div className="profit-calc__block-title">
                Благоустрій, охорона, сервіс в день:
              </div>
              <Range
                min={1}
                max={10}
                defaultValue={data.servicePrice}
                showRange={true}
                measureSign={currency}
                action={action.SET_SERVICE_PRICE}
              />
            </div>
          </div>
          {tab === "shared" && (
            <div className="profit-calc__block">
              <div className="profit-calc__rent-land">
                Вартість оренди землі за місяць:
                <span style={{ marginLeft: "17px" }}>
                  {data.rentPrice}
                  {currency}
                </span>
              </div>
            </div>
          )}
          <Button
            classList="btn btn-main calc-action"
            onClick={togglePopup}
            text="Розрахувати"
          />
        </div>
      </div>
      {showResult &&
        <Modal
          width="721px"
          onClose={() => setShowResult(false)}>
            <div className="profit-calc__result">
              {/* <button className="btn-close" onClick={togglePopup}>
                <svg width="16" height="16px">
                  <use href="icons-sprite.svg#constructor-modal-close-icon"></use>
                </svg>
              </button> */}
              {profit > 0 && (
                <>
                  <div className="profit-calc__info">
                    <div className="profit-calc__month-result">
                      дохід в місяць
                    <br />
                      <strong>
                        {currency}
                        {profit}+
                    </strong>
                    </div>
                    <div className="profit-calc__year-result">
                      дохід в рік
                    <br />
                      <strong>
                        {currency}
                        {profit * 12}+
                    </strong>
                    </div>
                  </div>
                  <Button
                    classList="btn btn-main result-action"
                    onClick={togglePopup}
                    text="інвестувати"
                  />
                </>
              )}
              {profit <= 0 && (
                <div className="profit-calc__notify">
                  * за поточних умов дохід не передбачено
                </div>
              )}
          </div>
      </Modal>
      }
    </section>
  );
}

export default ProfitCalc;
