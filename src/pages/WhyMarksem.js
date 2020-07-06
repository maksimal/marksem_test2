import React, { useState } from "react";
import StyledList from "./../components/shared/StyledList/StyledList";
import CompanyPresentation from "../components/CompanyPresentation/CompanyPresentation";
import ImageTextBlock from "./../components/ImageTextBlock/ImageTextBlock";
import CvForm from './../components/CvForm/'
import TeamSlider from './../components/TeamSlider/TeamSlider';
import SubscribeBlock from "./../components/SubscribeBlock/SubscribeBlock";
import ScrollToTop from './../components/shared/ScrollToTop'
import ScrollAnimation from 'react-animate-on-scroll'
import Sticker from './../components/Sticker/Sticker';
import StickerSlider from './../components/StickerSlider/StickerSlider';

export default function WhyMarksem(props) {
  useState(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div>
      <ScrollToTop />
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <CompanyPresentation
          action={true}
          title={
            <h1 className="company-presentation__title title--under">Ми MARKSEM</h1>
          }
          info={
            <div className="company-presentation__info" style={{ maxWidth: "530px" }}>
              <p className="f21" style={{ fontWeight: "500" }}>
                Ми команда досвідчених фахівців з амбіціями, які об’єднались задля нашої спільної мрії, яка є ціллю — заробляти відпочиваючи!
              </p>
              <p style={{ fontWeight: "normal", lineHeight: "27px", paddingTop: "24px" }}>
                Ми прагнемо, щоб наші парки були бажаним місцем відпочинку для багатьох людей. Ми працюємо над технологією будівництва повністю автономних будинків. Ми робимо все, щоб ви мали кращі місця для життя та відпочинку, і в той же час — прибутковий бізнес.
              </p>
            </div>
          }
          img="./img/why-marksem-top.png"
        />
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <ImageTextBlock
          type="1"
          title="Наші цінності"
          mediaType="img"
          isBackground={true}
          mediaPosition="left"
          imgUrl="./img/our_values.png"
          actionOnClick={() => console.log("click")}
          actionElementType="link"
          actionElementText="Watch the video about us"
          actionElementAlign="right"
        >
          <StickerSlider>
            <Sticker
              title="Професійність"
              text="Ми експерти своєї справи. Ми будуємо системну роботу, ефективну комунікацію та застосовуємо індивідуальний підхід до кожного клієнта."
            />
            <Sticker
              title="Інновації"
              text="Ми прагнемо запропонувати те, що не можуть запропонувати інші. Ми завжди відкриті для нових ідей та технологій."
            />
            <Sticker
              title="Репутація"
              text="Чітке виконання договірних зобов’язань, прозорість, чесність і надійність."
            />
            <Sticker
              title="Якість"
              text="Ми контролюємо кожен етап процесу виробництва будинку, будівництва парку чи надання послуг. Всі процеси відповідають міжнародним стандартам і регламентовані письмовими інструкціями. Ми виконуємо свою роботу згідно з існуючими системами якості."
            />
          </StickerSlider>
        </ImageTextBlock>
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <ImageTextBlock
          type="2"
          title="Інвестиції MARKSEM"
          mediaType="img"
          mediaPosition="right"
          imgUrl="./img/investment-metrics.png"
          actionOnClick={() => console.log("click")}
          actionElementType="button"
          actionElementText="Invest now"
          actionElementAlign="left"
        >
          <StyledList
            iconUrl="./icons-sprite.svg#investment-block-icon"
            iconSize={37}
            alignIcon="center"
            items={[
              {
                text: "Доступ до раніше недосяжного ринку інвестицій"
              },
              {
                text: "Продуктивність краща віддача завдяки чудовій моделі"
              },
              {
                text: "Експертний менеджмент команда досвідчених фахівців"
              }
            ]}
          />
        </ImageTextBlock>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <ImageTextBlock
          type="1"
          title="Умови співробітництва"
          mediaType="img"
          mediaPosition="left"
          imgUrl="./img/terms_of_cooperation.png"
          actionOnClick={() => console.log("click")}
          actionElementType="button"
          actionElementText="Contact us"
          actionElementAlign="center"
        >
          <p>Ми ретельно вивчаємо кожен пункт при інвестуванні в локації і надаємо  вам прогнози дохідності.</p>
          <p>Повний сервіс обслуговування та контролю будинку від MARKSEM.</p>
          <p>Стабільне партнерство, виповнення договірних зобов’язань.</p>
        </ImageTextBlock>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <TeamSlider
          title="Meet our team"
          secondaryText="We are the best team"
          teamMembers={[
            {
              imgUrl: "./img/team1.png",
              name: "Fedir Drozdov",
              role: "Co-founder",
              facebookLink: "#",
              linkdInLink: "#"
            },
            {
              imgUrl: "./img/team2.png",
              name: "Fedir Drozdov",
              role: "Co-founder",
              facebookLink: "#",
              linkdInLink: "#",
              instagramLink: "#"
            },
            {
              imgUrl: "./img/team3.png",
              name: "Fedir Drozdov",
              role: "Co-founder",
              facebookLink: "#",
              instagramLink: "#"
            }
          ]}
        />
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <CvForm />
      </ScrollAnimation>

      <SubscribeBlock type='minimal' />

    </div>
  );
}