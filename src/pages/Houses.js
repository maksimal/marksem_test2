import React from 'react';
import InfoCardList from '../components/InfoCardList';
import InfoCard from '../components/InfoCard';
import ImageTextBlock from './../components/ImageTextBlock/ImageTextBlock';
import StyledList from './../components/shared/StyledList/StyledList';
import TabsSection from './../components/TabsSection/TabsSection';

export default function Houses(props) {
  return (
    <div>
      <TabsSection
        sectionTitle="Chose a ready-made house"
        tabsHeadingsTexts={["Mobile houses", "Module houses", "Houseboats"]}
        tabsContents={[
          <ImageTextBlock
            style="4"
            title="Marksem offers you three types of mobile houses"
            mediaType="img"
            mediaPosition="left"
            imgUrl="./img/houses-type-1-tabs.png"
            mainContent={[
              <StyledList
                iconUrl="./img/icons/check-mark.svg"
                iconSize="20"
                items={[
                  ["M1",
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
                  ],
                  ["M2",
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lae ab illo inventore veritatis"
                  ],
                  ["M3",
                    "Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
                  ]
                ]}
              />
            ]}
          />,
          <ImageTextBlock
            style="4"
            title="Module houses"
            mediaType="img"
            mediaPosition="left"
            imgUrl="./img/houses-type-1-tabs.png"
            mainContent={[
              <StyledList
                iconUrl="./img/icons/check-mark.svg"
                iconSize="20"
                items={[
                  ["M4",
                    "Sed ut otam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
                  ],
                  ["M5",
                    "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
                  ],
                  ["M6",
                    "Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
                  ]
                ]}
              />
            ]}
          />,
          <ImageTextBlock
            style="4"
            title="Houseboats"
            mediaType="img"
            mediaPosition="left"
            imgUrl="./img/houses-type-1-tabs.png"
            mainContent={[
              <StyledList
                iconUrl="./img/icons/check-mark.svg"
                iconSize="20"
                items={[
                  ["M7",
                    "You have all necessary information considering your investment: revenue, capacity, ROI etc."
                  ],
                  ["M8",
                    "You are fully informed about all MARKSEM news, projects and features"
                  ],
                  ["M9",
                    "All your investments and actions are under your control: every business action is recorded"
                  ]
                ]}
              />
            ]}
          />
        ]}
      />

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
    </div>
  )
}