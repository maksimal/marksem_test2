import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

import InfoCardList from '../components/InfoCardList';
import ImageTextBlock from './../components/ImageTextBlock/ImageTextBlock';
import StyledList from './../components/shared/StyledList/StyledList';
import InfoCard from '../components/InfoCard';
import SampleSliderNu from '../components/SampleSliderNu'
import HouseWithKeysBlock from '../components/HouseWithKeysBlock/HouseWithKeysBlock';
import LocationProposalForm from './../components/LocationProposalForm/LocationProposalForm';
import ScrollToTop from './../components/shared/ScrollToTop';
import ScrollAnimation from 'react-animate-on-scroll';
import Constructor from './../components/Constructor/Constructor';
import { Tabs, TabsItem } from './../components/Tabs/Tabs';

import { setActiveHouseCategoryTab } from "./../actions/activeHouseCategoryTabActions";

export default function Houses(props) {


  const { houses } = useSelector(state => state.housesData);
  const activeHouseCategoryTab = useSelector(state => state.activeHouseCategoryTab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderHousesNU = (houses) => {

    const housesInCategory = houses
      .filter(({ category }) => category === activeHouseCategoryTab);

    return (
      <div className="houses-in-category-list">
        {housesInCategory.map((house, i) => {

          return (
            <ScrollAnimation
              key={i}
              animateIn="fadeIn"
              animateOnce={true}>
              <SampleSliderNu
                type="2"
                title={house.houseType}
                houseType={house.houseType}
                text={house.description4}
                images={house.exterior_variants[0].image_urls}
              />
              <div className="container">
                <Constructor house={house} />
              </div>
            </ScrollAnimation>
          )
        })}
      </div>
    )
  }


  return (
    <div>
      <ScrollToTop />

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <HouseWithKeysBlock
          mobileDescription={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]}
          desktopDescription={["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"]}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>

        <h2 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "40px" }}>Choose a ready made one house</h2>

        <Tabs onChangeTabAction={setActiveHouseCategoryTab} isResponsive>
          <TabsItem label="Mobile houses">
            <ImageTextBlock
              type="4"
              title="Marksem offers you three types of mobile houses"
              mediaType="img"
              mediaPosition="left"
              imgUrl="./img/houses-type-1-tabs.png"
            >
              <StyledList
                iconUrl="./icons-sprite.svg#check-mark"
                iconSize={20}
                items={[
                  {
                    title: "M1",
                    text: "You have all necessary information considering your investment: revenue, capacity, ROI etc."
                  },
                  {
                    title: "M2",
                    text: "You are fully informed about all MARKSEM news, projects and features"
                  },
                  {
                    title: "M3",
                    text: "All your investments and actions are under your control: every business action is recorded"
                  }
                ]}
              />
            </ImageTextBlock>
          </TabsItem>

          <TabsItem label="Module houses">
            <ImageTextBlock
              type="4"
              title="Module houses"
              mediaType="img"
              mediaPosition="left"
              imgUrl="https://via.placeholder.com/660x400.png?text=Module+Houses"
            >
              <StyledList
                iconUrl="./icons-sprite.svg#check-mark"
                iconSize={20}
                items={[
                  {
                    title: "M4",
                    text: "You have all necessary information considering your investment: revenue, capacity, ROI etc."
                  },
                  {
                    title: "M5",
                    text: "You are fully informed about all MARKSEM news, projects and features"
                  },
                  {
                    title: "M6",
                    text: "All your investments and actions are under your control: every business action is recorded"
                  }
                ]}
              />
            </ImageTextBlock>
          </TabsItem>

          <TabsItem label="Houseboats">
            <ImageTextBlock
              type="4"
              title="Houseboats"
              mediaType="img"
              mediaPosition="left"
              imgUrl="./img/house-builder/houseboats/Exterior/1.jpg"
            >
              <StyledList
                iconUrl="./icons-sprite.svg#check-mark"
                iconSize={20}
                items={[
                  {
                    title: "M7",
                    text: "You have all necessary information considering your investment: revenue, capacity, ROI etc."
                  },
                  {
                    title: "M8",
                    text: "You are fully informed about all MARKSEM news, projects and features"
                  },
                  {
                    title: "M9",
                    text: "All your investments and actions are under your control: every business action is recorded"
                  }
                ]}
              />
            </ImageTextBlock>
          </TabsItem>

        </Tabs>

      </ScrollAnimation>

      {
        renderHousesNU(houses)
      }

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <InfoCardList
          type={2}
          mainTitle='We offer different locations to set up your house'
          infoCards={[
            <InfoCard
              type={2}
              img="./img/cards/3card.png"
              title="Location 1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
              key={Math.random() * 10}
            />,
            <InfoCard
              type={2}
              img="./img/cards/4card.png"
              title="Location 2"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
              key={Math.random() * 10}
            />,
            <InfoCard
              type={2}
              img="./img/cards/3card.png"
              title="Location 3"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
              key={Math.random() * 10}
            />
          ]}
          btnText="CONTACT US"
        />
      </ScrollAnimation>

      <LocationProposalForm />
    </div>
  )
}