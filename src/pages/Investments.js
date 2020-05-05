import React, { userState, useState } from "react";
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

export default function Investments(props) {
  useState( () => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      
      <ScrollToTop />

      <CompanyPresentation
        title="Наша спільна ціль в бізнесі"
        text={
          <>
            <StyledListItem
              style={{ alignItems: "center" }}
              iconUrl="./icons-sprite.svg#point_icon"
              title={false}
              text="Якість, швидкість, сервіс та бажання відкривати нові можливості є фундаментом нашої компанії."
            />
            <StyledListItem
              style={{ alignItems: "center" }}
              iconUrl="./icons-sprite.svg#point_icon"
              title={false}
              text="Ваша інвестиція з часом зростає у вартості, як і зростає попит до парку чи локації."
            />
            <StyledListItem
              style={{ alignItems: "center" }}
              iconUrl="./icons-sprite.svg#point_icon"
              title={false}
              text="Збільшення кількості гостей в парках та локаціях шляхом власної вдосконаленості та реагуванням на попит і зміни ринку."
            />
            <StyledListItem
              style={{ alignItems: "center" }}
              iconUrl="./icons-sprite.svg#point_icon"
              title={false}
              text="Диверсифікація інвестиції."
            />
          </>
        }
        img="./img/invesments-top-block.png"
      />
      
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <SliderWithBackground slides={[
          [<div key={1}>
            <div className="slider-with-bg__slider-img">
              <img src="./img/1730.png" alt="slide"/>
            </div>
            <div className="slider-with-bg__slider-title">Інвестиційні плани</div>
            <p className="slider-with-bg__slider-text">
              Все моє! Ви отримуєте 100% доходу від свого будинку. </p>
            <div className="slider-with-bg__slider-info">
              <div className="slider-with-bg__slider-info__col1">
                <StyledList
                  iconUrl="./icons-sprite.svg#point_icon"
                  items={[
                    {
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    },
                    {
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    },
                    {
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    }
                  ]}
                />
              </div>
              <div className="slider-with-bg__slider-info__col2">
                <PersentageIndicator progress={90} name="INDICATOR 1" />
                <PersentageIndicator progress={40} name="INDICATOR 2" />
              </div>
            </div>
          </div>],
          [<div key={2}>
            <div className="slider-with-bg__slider-img">
              <img src="./img/1586.png" alt="slide"/>
            </div>
            <div className="slider-with-bg__slider-title">Інвестиційні плани</div>
            <p className="slider-with-bg__slider-text">
              70% спочатку. Перший внесок 70% від вартості вибраного вами будинку. Перевага в тому, що відсутні жодні відсотки чи штрафи, ви сплачуєте решту за будинок тоді, коли він здається по принципу 50%/50% від оренди.</p>
            <div className="slider-with-bg__slider-info">
              <div className="slider-with-bg__slider-info__col1">
                <StyledList
                  iconUrl="./icons-sprite.svg#point_icon"
                  items={[
                    {
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    },
                    {
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    },
                    {
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    }
                  ]}
                />
              </div>
              <div className="slider-with-bg__slider-info__col2">
                <PersentageIndicator progress={75} name="INDICATOR 1" />
                <PersentageIndicator progress={70} name="INDICATOR 2" />
              </div>
            </div>
          </div>],
          [<div key={3}>
            <div className="slider-with-bg__slider-img">
              <img src="./img/3054.png" alt="slide"/>
            </div>
            <div className="slider-with-bg__slider-title">Інвестиційні плани</div>
            <p className="slider-with-bg__slider-text">
              75% спочатку. Перший внесок 75% від вартості вибраного вами будинку. Перевага в тому, що відсутні жодні відсотки чи штрафи, ви сплачуєте решту за будинок тоді, коли він здається.
        </p>
            <div className="slider-with-bg__slider-info">
              <div className="slider-with-bg__slider-info__col1">
                <StyledList
                  iconUrl="./icons-sprite.svg#point_icon"
                  items={[
                    {
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    },
                    {
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    },
                    {
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    }
                  ]}
                />
              </div>
              <div className="slider-with-bg__slider-info__col2">
                <PersentageIndicator progress={35} name="INDICATOR 1" />
                <PersentageIndicator progress={100} name="INDICATOR 2" />
              </div>
            </div>
          </div>]
        ]} />
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <ImageTextBlock
          style="3"
          title="MARKSEM СRМ"
          mediaType="img"
          mediaPosition="right"
          imgUrl="./img/crm.png"
          mainContent={[
            <p>
              Розуміючи переваги, які надають сучасні технології, ми розробили CRM- систему, з якою власник будинку може керувати своїм майном та коштами.
            </p>,
            <p style={{ fontWeight: "bold" }}>
              MARKSEM СRМ виконає для вас наступні функції:
            </p>,
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
          ]}
        />
      </ScrollAnimation>


      <ScrollAnimation
         animateIn="fadeIn"
         animateOnce={true}>
        <OurLocationsBlock
          mainTitle="Локації MARKSEM"
          imgs={[
            'OurLocationBlock.png',
            'OurLocationBlock.png'
          ]}
          mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          locationTitle="location №1"
          locationText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat."
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
