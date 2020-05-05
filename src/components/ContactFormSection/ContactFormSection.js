import React from "react";
import "./ContactFormSection.scss";
import ContactFormVanila from "./../ContactFormVanila/ContactFormVanila";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const MyMap = GoogleApiWrapper({
  apiKey: "AIzaSyDDwztGQoDwxVUiUMylZdq3ORWEEaIyMo0",
})((props) => {
  return (
    <div>
      <Map
        google={props.google}
        zoom={14}
        initialCenter={{
          lat: 50.449173,
          lng: 30.423689,
        }}
      />
    </div>
  );
});

const ContactFormSection = ({
  formTitle = "Form Title",
  contactListTitle = "Контакти",
  phone = "pnone number",
  formIntroText,
  email = "email here",
  address = "address here",
}) => {
  return (
    <div className="container">
      <div className="contacts-section">
        <div className="background"></div>

        <ContactFormVanila
          title={formTitle}
          introText={formIntroText}
          actionOnClick={() => console.log("click")}
        />

        <div className="contacts">
          <h2>{contactListTitle}</h2>
          <div className="background-wrapper">
            <ul className="contacts-list">
              <li className="contacts-list__item">
                <svg className="contacts-list__icon">
                  <use href="./icons-sprite.svg#phone" />
                </svg>
                <span className="contacts-list__text">{phone}</span>
              </li>
              <li className="contacts-list__item">
                <svg className="contacts-list__icon">
                  <use href="./icons-sprite.svg#mail" />
                </svg>
                <span className="contacts-list__text">{email}</span>
              </li>
              <li className="contacts-list__item">
                <svg className="contacts-list__icon">
                  <use href="./icons-sprite.svg#pin-map" />
                </svg>
                <span className="contacts-list__text">{address}</span>
              </li>
            </ul>
            <div
              className="map"
              style={{ backgroundImage: `url(./img/map-placeholder.png)` }}
            >
              {/* <MyMap /> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
