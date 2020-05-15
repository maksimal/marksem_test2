import React, { useEffect } from 'react';
import InfoCardList from '../components/InfoCardList';
import ImageTextBlock from './../components/ImageTextBlock/ImageTextBlock';
import StyledList from './../components/shared/StyledList/StyledList';
import TabsSection from './../components/TabsSection/TabsSection';
import InfoCard from '../components/InfoCard'
import SampleSlider from '../components/SampleSlider'
import OptionsWithTabs from '../components/OptionsWithTabs'
import BlocksForTabs from './../components/BlocksForTabs'
import HouseWithKeysBlock from '../components/HouseWithKeysBlock/HouseWithKeysBlock';
import InteriorDesignSamples from './../components/InteriorDesignSamples'
import Button from './../components/shared/Button/Button'
import LocationProposalForm from './../components/LocationProposalForm/LocationProposalForm';
import ScrollToTop from './../components/shared/ScrollToTop'
import ScrollAnimation from 'react-animate-on-scroll';

export default function Houses(props) {
  useEffect( () => {
    window.scrollTo(0,0);
  },[])

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
        <TabsSection
          sectionTitle="Chose a ready-made house"
          tabsHeadingsTexts={["Mobile houses", "Module houses", "Houseboats"]}
          tabsContents={[
            <ImageTextBlock
              type="4"
              title="Marksem offers you three types of mobile houses"
              mediaType="img"
              mediaPosition="left"
              imgUrl="./img/houses-type-1-tabs.png"
              mainContent={[
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
              ]}
            />,
            <ImageTextBlock
              type="4"
              title="Module houses"
              mediaType="img"
              mediaPosition="left"
              imgUrl="./img/houses-type-1-tabs.png"
              mainContent={[
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
              ]}
            />,
            <ImageTextBlock
              type="4"
              title="Houseboats"
              mediaType="img"
              mediaPosition="left"
              imgUrl="./img/houses-type-1-tabs.png"
              mainContent={[
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
              ]}
            />
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <SampleSlider
          type="2"
          title="Marksem M-2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          img={[
            'sliderpic2.png',
            'sliderpic2.png',
            'sliderpic2.png',
            'sliderpic2.png',
            'sliderpic2.png',
            'sliderpic2.png',
            'sliderpic2.png'
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <SampleSlider
          type="3"
          title="Marksem M-4"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          img={[
            'sliderpic1.png',
            'sliderpic1.png',
            'sliderpic1.png',
            'sliderpic1.png',
            'sliderpic1.png',
            'sliderpic1.png'
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <SampleSlider
          type="1"
          title="Marksem M-Hotel"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          img={[
            'sliderpic3.png',
            'sliderpic3.png',
            'sliderpic3.png',
            'sliderpic3.png',
            'sliderpic3.png',
            'sliderpic3.png'
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <OptionsWithTabs
          title="Choose an option for planning your house, well as a complete set"
          activeTabNumber={0}
          tabsHeadingsTexts={["Standart", "Premium"]}
          tabsContent={[
            <BlocksForTabs
              imgs={[
                'tabsslider.png',
                'tabsslider2.png'
              ]}
              texts={[
                '111Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                '111Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
              ]}
            />,
            <BlocksForTabs
              imgs={[
                'tabsslider.png',
                'tabsslider2.png'
              ]}
              texts={[
                '222Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                '222Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
              ]}
            />
          ]}
        />
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <InteriorDesignSamples
          mainTitle="Review our interior design we offer for you"
          imgs={[
            'interior.png',
            'interior.png'
          ]}
          texts={[
            'Interior Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Interior Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Interior Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Interior Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          ]}
          button={
            <Button
              classList="btn-main"
              text="SELECT"
            />
          }
        />
      </ScrollAnimation>


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