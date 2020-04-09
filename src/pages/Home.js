import React from "react";
// import SectionType2 from '../components/section_type2/section_type2';
import StyledLink from "../components/shared/StyledLink";
import StyledList from "./../components/shared/StyledList/StyledList";
// import SectionType3 from '../components/section_type_3/section_type_3';
import InfoCardList from "../components/InfoCardList";
import InfoCard from "../components/InfoCard";
import CompanyPresentation from "../components/CompanyPresentation/CompanyPresentation";
import ImageTextBlock from "./../components/ImageTextBlock/ImageTextBlock";
import GridSection from "./../components/GridSection/GridSection";

export default function Home(props) {
  return (
    <div>
      <CompanyPresentation
        title="marksem - your new reliable investment partner"
        text={
          <>
            <p style={{ fontSize: "28px", lineHeight: "36px" }}>
              MARKSEM is a new way to invest smartly. We offer you favourable
              terms of lending and financing.
            </p>
          </>
        }
        img="./img/houses.png"
      />

      <ImageTextBlock
        style="1"
        title="What is the point?"
        mediaType="video"
        mediaPosition="left"
        videoThumbnailUrl="./img/video_not_active.png"
        videoUrl="https://www.youtube.com/watch?v=9HDEHj2yzew"
        mainContent={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo natus consectetur error tenetur sunt excepturi aspernatur magnam sit quis eum.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo natus consectetur error tenetur sunt excepturi aspernatur magnam sit quis eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo natus consectetur error tenetur sunt excepturi aspernatur magnam sit quis eum."
        ]}
      />

      <GridSection
        width="1186px"
        coloumnsNumber={2}
        title="The investment process is easy and looks as follows:"
        content={[
          {
            img: "./img/icons/paper-icon.svg",
            title: "choose an investment plan",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua."
          },
          {
            img: "./img/icons/location-icon.svg",
            title: "choose location",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua."
          },
          {
            img: "./img/icons/home-icon.svg",
            title: "select a house",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua."
          },
          {
            img: "./img/icons/currency-icon.svg",
            title: "get your profit",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua."
          }
        ]}
      />

      <ImageTextBlock
        style="1"
        title="Opportunities and Guaranties"
        mediaType="img"
        mediaPosition="right"
        imgUrl="img/phoenix-exterior-1.png"
        actionElementType="link"
        actionElementText="Learn more"
        actionElementAlign="image"
        mainContent={[
          <div style={{ fontWeight: "bold" }}>
            {" "}
            Some intro text Lorem ipsum dolor sit amet.
          </div>,
          <StyledList
            iconUrl="/img/icons/guarantee-icon.svg"
            items={[
              [
                "GUARANTEE №1",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua."
              ],
              [
                "GUARANTEE №2",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua."
              ],
              [
                "GUARANTEE №3",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua."
              ]
            ]}
          />
        ]}
      />

      <InfoCardList
        type={1}
        mainTitle="Choose an investment plan and start earning today"
        infoCards={[
          <InfoCard
            type={1}
            img="./img/cards/1card.png"
            title="additional income"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
            linkText="Watch the video"
            linkURL="#"
            key={Math.random() * 10}
          />,
          <InfoCard
            type={1}
            img="./img/cards/1card.png"
            title="additional income"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
            linkText="Watch the video"
            linkURL="#"
            key={Math.random() * 10}
          />,
          <InfoCard
            type={1}
            img="./img/cards/1card.png"
            title="additional income"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
            linkText="Watch the video"
            linkURL="#"
            key={Math.random() * 10}
          />
        ]}
        btnText="GET STARTED"
      />
    </div>
  );
}
