import React from 'react';
import FAQ from '../../components/FAQ/FAQ';
import ContactFormSection from '../../components/ContactFormSection/ContactFormSection';
import ImageTextBlock from '../../components/ImageTextBlock/ImageTextBlock';
import StyledList from '../../components/shared/StyledList/StyledList';
import StyledListItem from '../../components/shared/StyledListItem/StyledListItem';
import ScrollToTop from '../../components/shared/ScrollToTop'
import ScrollAnimation from 'react-animate-on-scroll';
import "./Contacts.scss";

export default function Contacts(props) {

  return (
    <div className="contacts-page">
        <div className="social-links-container">
          <a href="#" className="social-link">
            <svg width={16} height={16}>
              <use href="/icons-sprite.svg#icon-facebook" />
            </svg>
          </a>
          <a href="#" className="social-link">
            <svg width={16} height={16}>
              <use href="/icons-sprite.svg#icon-twitter" />
            </svg>
          </a>
          <a href="#" className="social-link">
            <svg width={16} height={16}>
              <use href="/icons-sprite.svg#icon-linkedin" />
            </svg>
          </a>
          <a href="#" className="social-link">
            <svg width={16} height={16}>
              <use href="/icons-sprite.svg#icon-instagram" />
            </svg>
          </a>
        </div>
    



      <ScrollToTop />

      <div className="contacts-header" style={{ backgroundImage: `url(./img/sky.png)` }}>
        <div className="container">
          <h1 style={{ padding: "88px 0", lineHeight: "1.2em", fontSize: "42px", fontWeight: "bold" }}>Контактна інформація</h1>
        </div>
      </div>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut">
        <ImageTextBlock
          style="1"
          title="Зацікавлені в співпраці з нами?"
          mediaType="img"
          mediaPosition="right"
          imgUrl="./img/contacts1.png"
          actionOnClick={() => console.log("click")}
          actionElementType="button"
          actionElementText="Contact us"
          actionElementAlign="bottom"
          mainContent={[
            <p style={{ fontWeight: "bold", textTransform: "uppercase" }}>
              Ми відкриті до пропозицій та раді співпраці з іншими компаніями.
              </p>,
            <p style={{ fontWeight: "bold", textTransform: "uppercase" }}>
              Пропонуємо вигідні умови компаніям з таких галузей:
              </p>,
            <StyledListItem
              style={{ textTransform: "uppercase", alignItems: "center" }}
              iconUrl="/icons-sprite.svg#plane"
              iconSize={44}
              text="Туроператори"
            />,
            <StyledListItem
              style={{ textTransform: "uppercase", alignItems: "center" }}
              iconUrl="/icons-sprite.svg#plant"
              iconSize="44"
              text="Власники земель"
            />,
            <StyledListItem
              style={{ textTransform: "uppercase", alignItems: "center" }}
              iconUrl="/icons-sprite.svg#bell_icon"
              iconSize="44"
              text="Компанії з надання товарів та послуг"
            />
          ]}
        />
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut">
        <ContactFormSection
          formTitle="Залиште повідомлення"
          formIntroText="Наші менеджери будуть раді відповісти на ваші запитання. Заповніть форму нижче та ми зв’яжемось з вами."
          contactListTitle="Contacts"
          phone="+38(063)630-98-21"
          email="E-mail@gmail.com"
          address="Mashinostroitelnaya 37, office 502 Ukraine, Kyiv"
        />
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut">
        <section style={{ marginBottom: "120px" }}>
          <div className="container">
            <h2 className="default-title">Frequently Asked Questions</h2>
            <p style={{ padding: "25px 0" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore</p>

            <FAQ
              queston="What is it?"
              answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, accusantium! ipsum dolor sit amet, consectetur adipisicing elit. Quo, accusantium!"
            />
            <FAQ
              queston="Who is that?"
              answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, accusantium! ipsum dolor sit amet, consectetur adipisicing elit. Quo, accusantium!"
            />
            <FAQ
              queston="Where is it?"
              answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, accusantium! ipsum dolor sit amet, consectetur adipisicing elit. Quo, accusantium!"
            />
            <FAQ
              queston="Why is it?"
              answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, accusantium! ipsum dolor sit amet, consectetur adipisicing elit. Quo, accusantium!"
            />

          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}