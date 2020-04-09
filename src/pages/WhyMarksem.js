import React from "react";
// import SectionType2 from '../components/section_type2/section_type2';
import StyledLink from "../components/shared/StyledLink";
import StyledList from "./../components/shared/StyledList/StyledList";
import CompanyPresentation from "../components/CompanyPresentation/CompanyPresentation";
import Button from "../components/shared/Button/Button";
// import SectionType4 from '../components/SectionType4/SectionType4';
import ImageTextBlock from "./../components/ImageTextBlock/ImageTextBlock";

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
    </div>
  );
}
