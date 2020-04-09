import React from 'react';
import InfoCardList from '../components/InfoCardList';
import InfoCard from '../components/InfoCard'

export default function Houses (props) {
  return (
    <div>
      <InfoCardList 
        type={2}
        mainTitle='We offer different locations to set up your house'
        infoCards={[
          <InfoCard
            type={2}
            img="./img/cards/3card.png"
            title="Location 1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
            key={Math.random()*10}
            />,
          <InfoCard
            type={2}
            img="./img/cards/4card.png"
            title="Location 2"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
            key={Math.random()*10}
            />,
          <InfoCard
            type={2}
            img="./img/cards/3card.png"
            title="Location 3"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
            key={Math.random()*10}
            />
        ]}
        btnText="CONTACT US"
      />
    </div>
  )
}