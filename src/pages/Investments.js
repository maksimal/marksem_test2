import React, { useState } from "react";
import ImageTextBlock from "./../components/ImageTextBlock/ImageTextBlock";
import StyledListItem from "./../components/shared/StyledListItem/StyledListItem";
import StyledList from "./../components/shared/StyledList/StyledList";
import GridSection from "./../components/GridSection/GridSection";
import SliderWithBackground from "./../components/SliderWithBackground/SliderWithBackground";
import PersentageIndicator from "./../components/shared/PersentageIndicator/PersentageIndicator";
import CompanyPresentation from "./../components/CompanyPresentation/CompanyPresentation";
import OurLocationsBlock from "../components/OurLocationsBlock/OurLocationsBlock";
import ScrollToTop from './../components/shared/ScrollToTop'
import ScrollAnimation from 'react-animate-on-scroll'
import ProfitCalc from "../components/ProfitCalc";
import HexagonBadge from "../components/shared/HexagonBadge/HexagonBadge";

export default function Investments(props) {
  useState(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>

      <ScrollToTop />

      <CompanyPresentation
        title={
          <h1 className="company-presentation__title title--align">Наша спільна ціль в бізнесі</h1>
        }
        info={
          <div className="company-presentation__info">
            <StyledListItem
              style={{ alignItems: "center", marginTop: "20px"}}
              iconUrl="./icons-sprite.svg#point_icon"
              title={false}
              text="Якість, швидкість, сервіс та бажання відкривати нові можливості є фундаментом нашої компанії."
            />
            <StyledListItem
              style={{ alignItems: "center", marginTop: "20px" }}
              iconUrl="./icons-sprite.svg#point_icon"
              title={false}
              text="Ваша інвестиція з часом зростає у вартості, як і зростає попит до парку чи локації."
            />
            <StyledListItem
              style={{ alignItems: "center", marginTop: "20px" }}
              iconUrl="./icons-sprite.svg#point_icon"
              title={false}
              text="Збільшення кількості гостей в парках та локаціях шляхом власної вдосконаленості та реагуванням на попит і зміни ринку."
            />
            <StyledListItem
              style={{ alignItems: "center", marginTop: "20px" }}
              iconUrl="./icons-sprite.svg#point_icon"
              title={false}
              text="Диверсифікація інвестиції."
            />
          </div>
        }
        img="./img/invesments-top-block.png"
      />

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <SliderWithBackground slides={[
          [<div key={1}>
            <div className="slider-with-bg__slider-img">
              <img src="./img/1730.png" alt="slide" />
            </div>
            <div className="slider-with-bg__slider-title">70% спочатку</div>
            <div className="slider-with-bg__slider-info">
              <PersentageIndicator progress={70}/>
                <img className="slider-with-bg__img" src="./img/3690.png" alt="slide"/>
                <div className="slider-with-bg__badge-container">
                <HexagonBadge className="hexagon-badge slider-with-bg__badge1" text="Lorem ipsum dolor sit amet, consectetur" bg="right"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge2" text="Lorem ipsum dolor sit amet, consectetur" bg="left"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge3" text="Lorem ipsum dolor sit amet, consectetur" bg="right"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge4" text="Lorem ipsum dolor sit amet, consectetur" bg="left"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge5" text="Lorem ipsum dolor sit amet, consectetur" bg="right"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge6" text="Lorem ipsum dolor sit amet, consectetur" bg="left"/>
                </div>
            </div>
          </div>],
          [<div key={2}>
            <div className="slider-with-bg__slider-img">
              <img src="./img/1586.png" alt="slide" />
            </div>
            <div className="slider-with-bg__slider-title">75% спочатку</div>
            <div className="slider-with-bg__slider-info">
              <PersentageIndicator progress={75}/>
                <img className="slider-with-bg__img" src="./img/3690.png" alt="slide"/>
                <div className="slider-with-bg__badge-container">
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge1" text="Lorem ipsum dolor sit amet, consectetur" bg="right"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge2" text="Lorem ipsum dolor sit amet, consectetur" bg="left"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge3" text="Lorem ipsum dolor sit amet, consectetur" bg="right"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge4" text="Lorem ipsum dolor sit amet, consectetur" bg="left"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge5" text="Lorem ipsum dolor sit amet, consectetur" bg="right"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge6" text="Lorem ipsum dolor sit amet, consectetur" bg="left"/>
                </div>
            </div>
          </div>],
          [<div key={3}>
            <div className="slider-with-bg__slider-img">
              <img src="./img/3054.png" alt="slide" />
            </div>
            <div className="slider-with-bg__slider-title">ВСЕ МОЄ!</div>
            <div className="slider-with-bg__slider-info">
              <PersentageIndicator progress={100}/>
                <img className="slider-with-bg__img" src="./img/3690.png" alt="slide"/>
                <div className="slider-with-bg__badge-container">
                <HexagonBadge className="hexagon-badge slider-with-bg__badge1" text="Lorem ipsum dolor sit amet, consectetur" bg="right"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge2" text="Lorem ipsum dolor sit amet, consectetur" bg="left"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge3" text="Lorem ipsum dolor sit amet, consectetur" bg="right"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge4" text="Lorem ipsum dolor sit amet, consectetur" bg="left"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge5" text="Lorem ipsum dolor sit amet, consectetur" bg="right"/>
                  <HexagonBadge className="hexagon-badge slider-with-bg__badge6" text="Lorem ipsum dolor sit amet, consectetur" bg="left"/>
                </div>
            </div>
          </div>],
        ]} />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
          <ProfitCalc currency="€"/>
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <ImageTextBlock
          type="3"
          title="MARKSEM СRМ"
          mediaType="img"
          mediaPosition="right"
          imgUrl="./img/crm.png"
        >
          <p>
            Розуміючи переваги, які надають сучасні технології, ми розробили CRM- систему, з якою власник будинку може керувати своїм майном та коштами.
            </p>
          <p style={{ fontWeight: "bold" }}>
            MARKSEM СRМ виконає для вас наступні функції:
            </p>
          <StyledList
            iconUrl="./icons-sprite.svg#box-check-icon"
            items={[
              {
                text: "Календар проживання, надходження коштів"
              },
              {
                text: "Аналітична звітність в періоді. Дохід /витрати, завантаження, рентабельність"
              },
              {
                text: "Оплата по лічильникам, сервіс, інші договірні зобов’язання"
              },
              {
                text: "Бронювання дат, замовлення послуг і товарів до вашого приїзду"
              },
              {
                text: "Індивідуальний менеджер, інформування про події, проекти та можливості"
              },
              {
                text: "Історія всіх документів, дій та операцій з вашим будинком"
              }
            ]}
          />
        </ImageTextBlock>
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <OurLocationsBlock
          mainTitle="Локації MARKSEM"
          imgs={[
            'OurLocationBlock.png',
            'OurLocationBlock.png',
            'OurLocationBlock.png',
            'OurLocationBlock.png'
          ]}
          mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          locationText={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.",
            "222Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.",
            "333Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.",
            "444Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat."
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <GridSection
          size={3}
          title="Додатковий готельний сервіс"
          content={[
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#own-ponds-icon" />
              </svg>,
              title: "Озера для відпочинку та риболовлі",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
            },
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#playgrounds-icon" />
              </svg>,
              title: "Басейни ",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            },
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#basketball-icon" />
              </svg>,
              title: "Спортивні та ігрові майданчики",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            },
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#fotball-fields-icon" />
              </svg>,
              title: "Ігрові кімнати та дитячі клуби",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            },
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#treadmills-icon" />
              </svg>,
              title: "Ресторани",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            },
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#kindergarden-icon" />
              </svg>,
              title: "Конференц-зали",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            },
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#delivery-icon" />
              </svg>,
              title: "Міні-зоопарки",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            },
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#car-washing-icon" />
              </svg>,
              title: "Доставка товарів",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            },
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#gyms-icon" />
              </svg>,
              title: "Інші сервіси",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            },
          ]}
        />
      </ScrollAnimation>

    </div>
  )
}
