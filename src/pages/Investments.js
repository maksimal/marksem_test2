import React from "react";
import ImageTextBlock from "./../components/ImageTextBlock/ImageTextBlock";
import StyledListItem from "./../components/shared/StyledList/StyledList";
import StyledList from "./../components/shared/StyledList/StyledList";
import GridSection from "./../components/GridSection/GridSection";

export default function Investments(props) {
  return (
    <div>
      <ImageTextBlock
        style="3"
        title="Marksem CRM"
        mediaType="img"
        mediaPosition="right"
        imgUrl="./img/crm.png"
        mainContent={[
          <p>
            All our investors become members of MARKSEM investment community! We
            provide you with an access to our CRM, where you will have unique
            access to all information considering your investment!
          </p>,
          <p style={{ fontWeight: "bold" }}>
            MARKSEM CRM provides you with the following features:
          </p>,
          <StyledList
            iconUrl="./img/icons/box-check-icon.png"
            items={[
              [
                "You have all necessary information considering your investment: revenue, capacity, ROI etc."
              ],
              [
                "You are fully informed about all MARKSEM news, projects and features"
              ],
              [
                "All your investments and actions are under your control: every business action is recorded"
              ],
              ["You have all documents and reports in one place"]
            ]}
          />
        ]}
      />
      <GridSection
        coloumnsNumber={3}
        title="Additional hotel services"
        content={[
          {
            img: "./img/icons/own-ponds-icon.svg",
            title: "Own ponds",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          },
          {
            img: "./img/icons/playgrounds-icon.svg",
            title: "playgrounds",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          },
          {
            img: "./img/icons/basketball-icon.svg",
            title: "SPORTS FIELDS",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          },
          {
            img: "./img/icons/fotball-fields-icon.svg",
            title: "football fields",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          },
          {
            img: "./img/icons/treadmills-icon.svg",
            title: "TREADMILLS",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          },
          {
            img: "./img/icons/kindergarden-icon.svg",
            title: "KINDERGARTENs",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          },
          {
            img: "./img/icons/delivery-icon.svg",
            title: "Delivery",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          },
          {
            img: "./img/icons/car-washing-icon.svg",
            title: "car washing",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          },
          {
            img: "./img/icons/gyms-icon.svg",
            title: "gyms",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          },
        ]}
      />
    </div>
  );
}
