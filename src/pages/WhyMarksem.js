import React from "react";
import StyledLink from "../components/shared/StyledLink";
import StyledList from "./../components/shared/StyledList/StyledList";
import CompanyPresentation from "../components/CompanyPresentation/CompanyPresentation";
import Button from "../components/shared/Button/Button";
import ImageTextBlock from "./../components/ImageTextBlock/ImageTextBlock";
import CvForm from './../components/CvForm/'
import TeamSlider from './../components/TeamSlider/TeamSlider';
import SubscribeBlock from "./../components/SubscribeBlock/SubscribeBlock";

export default function WhyMarksem(props) {
  return (
    <div>
      <CompanyPresentation
        title="WE ARE MARKSEM"
        text={
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc velit dictum pellentesque bibendum viverra integer viverra.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc velit dictum pellentesque bibendum viverra integer viverra.
            </p>
          </>
        }
        img="./img/why-marksem-top.png"
      />

      <ImageTextBlock
        style="1"
        title="Our values"
        mediaType="img"
        mediaPosition="left"
        imgUrl="./img/our_values.png"
        actionElementType="link"
        actionElementText="Watch the video about us"
        actionElementAlign="right"
        mainContent={[
          "Lorem ipsum dolor sit Lor consectetur adipisicing elit. Nemo natus consectetur error tenetur sunt excepturi aspernatur magnam sit quis eum.",
          "Nemo natus consectetur error tenetur sunt ex sectetur error tecepturi aspernatur magnam sit quis eum.",
          "Lorem ipsum dolor sit  Nemo natus consectetur error tenetur sunt excepturi aspernatur magnam sit quis eum.Loremexcepturi aspernatur magnam sit quis eum."
        ]}
      />

      <ImageTextBlock
        style="2"
        title="Marksem investments"
        mediaType="img"
        mediaPosition="right"
        imgUrl="./img/investment-metrics.png"
        actionElementType="button"
        actionElementText="Invest now"
        actionElementAlign="left"
        mainContent={[
          <StyledList
            iconUrl="./img/icons/investment-block-icon.svg"
            iconSize="37"
            items={[
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua."
              ],
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua."
              ],
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua."
              ]
            ]}
          />
        ]}
      />

      <ImageTextBlock
        style="1"
        title="Terms of cooperaition"
        mediaType="img"
        mediaPosition="left"
        imgUrl="./img/terms_of_cooperation.png"
        actionElementType="button"
        actionElementText="Contact us"
        actionElementAlign="center"
        mainContent={[
          "Lorem ipsum dolor sit Lor consectetur adipisicing elit. Nemo natus consectetur error tenetur sunt excepturi aspernatur magnam sit quis eum.",
          "Lorem ipsum dolor sit  Nemo natus consectetur error tenetur sunt excepturi aspernatur magnam sit quis eum.Loremexcepturi aspernatur magnam sit quis eum."
        ]}
      />

      <CvForm />
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
      <SubscribeBlock type='minimal'/>
    </div>
  );
}
