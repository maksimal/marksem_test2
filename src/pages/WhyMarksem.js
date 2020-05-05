import React, { useState } from "react";
import StyledList from "./../components/shared/StyledList/StyledList";
import CompanyPresentation from "../components/CompanyPresentation/CompanyPresentation";
import ImageTextBlock from "./../components/ImageTextBlock/ImageTextBlock";
import CvForm from './../components/CvForm/'
import TeamSlider from './../components/TeamSlider/TeamSlider';
import SubscribeBlock from "./../components/SubscribeBlock/SubscribeBlock";
import ScrollToTop from './../components/shared/ScrollToTop'
import ScrollAnimation from 'react-animate-on-scroll'

export default function WhyMarksem(props) {
  useState( () => {
    window.scrollTo(0,0);
  })

  return (
    <div>
      <ScrollToTop />

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <CompanyPresentation
          title="Ми MARKSEM"
          text={
            <>
              <p>
                Ми команда досвідчених фахівців з амбіціями, які об’єднались задля нашої спільної мрії, яка є ціллю — заробляти відпочиваючи!
                </p>
              <p>
                Ми прагнемо, щоб наші парки були бажаним місцем відпочинку для багатьох людей. Ми працюємо над технологією будівництва повністю автономних будинків. Ми робимо все, щоб ви мали кращі місця для життя та відпочинку, і в той же час — прибутковий бізнес.
                </p>
            </>
          }
          img="./img/why-marksem-top.png"
        />
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <ImageTextBlock
          style="1"
          title="Наші цінності"
          mediaType="img"
          mediaPosition="left"
          imgUrl="./img/our_values.png"
          actionOnClick={() => console.log("click")}
          actionElementType="link"
          actionElementText="Watch the video about us"
          actionElementAlign="right"
          mainContent={[
            "Професійність. Ми експерти своєї справи. Ми будуємо системну роботу, ефективну комунікацію та застосовуємо індивідуальний підхід до кожного клієнта.",
            "Інновації. Ми прагнемо запропонувати те, що не можуть запропонувати інші. Ми завжди відкриті для нових ідей та технологій.",
            "Репутація. Чітке виконання договірних зобов’язань, прозорість, чесність і надійність.",
            "Якість. Ми контролюємо кожен етап процесу виробництва будинку, будівництва парку чи надання послуг. Всі процеси відповідають міжнародним стандартам і регламентовані письмовими інструкціями. Ми виконуємо свою роботу згідно з існуючими системами якості."
          ]}
        />
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <ImageTextBlock
          style="2"
          title="Інвестиції MARKSEM"
          mediaType="img"
          mediaPosition="right"
          imgUrl="./img/investment-metrics.png"
          actionOnClick={() => console.log("click")}
          actionElementType="button"
          actionElementText="Invest now"
          actionElementAlign="left"
          mainContent={[
            <StyledList
              iconUrl="./icons-sprite.svg#investment-block-icon"
              iconSize={37}
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
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <ImageTextBlock
          style="1"
          title="Умови співробітництва"
          mediaType="img"
          mediaPosition="left"
          imgUrl="./img/terms_of_cooperation.png"
          actionOnClick={() => console.log("click")}
          actionElementType="button"
          actionElementText="Contact us"
          actionElementAlign="center"
          mainContent={[
            "Ми ретельно вивчаємо кожен пункт при інвестуванні в локації і надаємо  вам прогнози дохідності.",
            "Повний сервіс обслуговування та контролю будинку від MARKSEM.",
            "Аналітичні звіти зі статистикою дохідності.",
            "Стабільне партнерство, виповнення договірних зобов’язань."
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <CvForm />
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

      <SubscribeBlock type='minimal' />

    </div>
  );
}