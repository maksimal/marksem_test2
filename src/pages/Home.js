import React, { useEffect} from "react";
// import SectionType2 from '../components/section_type2/section_type2';
import StyledLink from "../components/shared/StyledLink";
import StyledList from "./../components/shared/StyledList/StyledList";
// import SectionType3 from '../components/section_type_3/section_type_3';
import InfoCardList from "../components/InfoCardList";
import InfoCard from "../components/InfoCard";
import CompanyPresentation from "../components/CompanyPresentation/CompanyPresentation";
import ImageTextBlock from "./../components/ImageTextBlock/ImageTextBlock";
import GridSection from "./../components/GridSection/GridSection";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";
import ScrollToTop from './../components/shared/ScrollToTop'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css'

export default function Home(props) {
  useEffect( () => {

    window.scrollTo(0, 0);

  },[])

  console.log(props.openPageTitle)
  return (
    <main>
      
      <ScrollToTop />

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <CompanyPresentation
          title="MARKSEM — ваш надійний партнер."
          text={
            <>
              <p style={{ fontSize: "28px", lineHeight: "36px" }}>
                Інвестуйте, дбайте про майбутнє та насолоджуйтесь життям вже сьогодні.
              </p>
              <p style={{ fontSize: "28px", lineHeight: "36px" }}>
                Будуйте нові можливості з MARKSEM.
              </p>
            </>
          }
          img="./img/houses.png"
          action={true}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <ImageTextBlock
          style="1"
          title="Головна ідея"
          mediaType="video"
          mediaPosition="left"
          mediaStyle={{top: "25px"}}
          videoThumbnailUrl="./img/video_not_active.png"
          videoUrl="https://www.youtube.com/watch?v=9HDEHj2yzew"
          mainContent={[
            "Ми виробляємо затишні та комфортні будинки, орієнтуючись на сучасні технології, функціональність та високу якість.",
            "Будинки MARKSEM можуть стати для вас заміським будинком або власним бізнесом.",
            "Розмістити такий будинок ви можете на своїй ділянці або в одному з наших парків, що мають гарні краєвиди, готельну інфраструктуру та сервіс. Таким чином, ви будете мати, куди поїхати на вихідні, де провести відпустку чи просто виїхати за місто, як тільки виникне потреба. А решту часу будинок буде працювати на вас.",
            "Вам не потрібно турбуватись про обслуговування: усі парки MARKSEM — це комплекс сервісів високого рівня.",
            "Ми пропонуємо вам стати не тільки власником комфортного, затишного будинку для відпочинку та життя, а й максимально ефективно використовувати його під час вашої відсутності — як бізнес оренди житла.",
            "З великою увагою до деталей ми турбуємось про все: від обслуговування до керування.",
            "Розуміючи переваги, які надають сучасні технології, ми розробили CRM- систему, з якою власник будинку може керувати своїм майном та коштами."
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <GridSection
          // width="1186px"
          size={2}
          title="Інвестиційний процес"
          content={[
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#paper-icon" />
              </svg>,
              title: "Ви обираєте зручний для вас план інвестицій.",
              text:
                "MARKSEM пропонує декілька планів інвестицій. Кожен з них розроблений таким чином, щоб вкладені вами кошти, незалежно від стартової суми, принесли вам максимальну ефективність у часі."
            },
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#location-icon" />
              </svg>,
              title: "Обираєте місце розташування.",
              text:
                "Розмістити будинок ви можете в одному з наших парків MARKSEM, які мають сучасну готельну інфраструктуру, або на своїй території."
            },
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#home-icon" />
              </svg>,
              title: "Обираєте будинок.",
              text:
                "У нашому каталозі ми пропонуємо будинки від 15м2 до 90м2, які мають різне планування і кількість кімнат. При замовленні будинку ви обираєте бажаний вам інтер’єр та екстер’єр. Також додатково можете замовити терасу. "
            },
            {
              icon: <svg className="grid-icon">
                <use href="./icons-sprite.svg#currency-icon" />
              </svg>,
              title: "Стаєте партнером. Отримуєте дохід. ",
              text:
                "Коли ви стаєте власником будинку та партнером MARKSEM, ми підключаємо вас до нашої CRM-системи, з якою ви контролюєте  бронювання та надходження коштів."
            }
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <ImageTextBlock
          style="1"
          title="Можливості"
          mediaType="img"
          mediaPosition="right"
          imgUrl="./img/phoenix-exterior-1.png"
          actionElementType="link"
          actionElementText="Дізнатися більше"
          actionElementAlign="image"
          mainContent={[
            <div style={{ fontWeight: "bold" }}>
              Інвестуючи у будинки та парки MARKSEM, ви матимете власний орендний бізнес, що дозволить вам збільшити ваш особистий дохід.
          </div>,
            <StyledList
              iconUrl="./icons-sprite.svg#guarantee-icon"
              items={[
                {
                  text: "Отримати задоволення від свого бізнесу. Ви можете приїхати у свій будинок будь-коли і насолоджуватись природою та якісним готельним сервісом."
                },
                {
                  text: "Обмінюватися будинками за програмою MARKSEM Change Home, без перевезення самого будинку."
                },
                {
                  text: "Запропонуйте свою локацію — і MARKSEM зробить там парк відпочинку вашої мрії."
                }
              ]}
            />
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <InfoCardList
          type={1}
          mainTitle="Виберіть інвестиційний план та заробляйте сьогодні"
          infoCards={[
            <InfoCard
              type={1}
              img="./img/cards/1card.png"
              // title="additional income"
              text="Все моє! Ви отримуєте 100% доходу від свого будинку."
              linkText="Watch the video"
              linkURL="#"
              key={Math.random() * 10}
            />,
            <InfoCard
              type={1}
              img="./img/cards/1card.png"
              // title="additional income"
              text="70% спочатку. 50 на 50 потім. Перший внесок 70%, виплата за будинок 50% з оренди."
              linkText="Watch the video"
              linkURL="#"
              key={Math.random() * 10}
            />,
            <InfoCard
              type={1}
              img="./img/cards/1card.png"
              // title="additional income"
              text="75% спочатку. Виплата за будинок з оренди."
              linkText="Watch the video"
              linkURL="#"
              key={Math.random() * 10}
            />
          ]}
          btnText="Розпочати"
        />
      </ScrollAnimation>

      <SubscribeBlock type='maximal' />
    </main>
  );
}
