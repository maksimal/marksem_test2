import React, { useState } from 'react';
import "./TabsSection.scss";

export default function TabsSection({
  sectionTitle = "Default Section Title",
  tabsHeadingsTexts = ["One", "Two", "Three"],
  tabsContents = []
}) {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (e) => {
    Array.from(document.querySelectorAll(".tabs-heading"))
      .map(el => el.classList.remove("active"));
    e.target.classList.add("active");

    Array.from(document.querySelectorAll(".tab-content"))
      .map(el => el.classList.remove("active"));

    let tabNumber = e.target.dataset.tab_number;

    document.querySelector(`.tab-content[data-tab_number='${tabNumber}']`)
      .classList.add("active");

    setActiveTab(tabNumber);
  }

  return (
    <div className="tabs-house-types">
      <div className="container">
        <h2 className="section-title">{sectionTitle}</h2>
        <div className="tabs-headings">
          {
            tabsHeadingsTexts.map((tabHeadingText, i) => {
              return (
                <button
                  key={i}
                  onClick={toggleTab}
                  data-tab_number={i}
                  className={i === activeTab ? "tabs-heading active" : "tabs-heading"}
                >
                  {tabHeadingText}
                </button>
              )
            })
          }
        </div>
        <div className="tabs-contents">
          {
            tabsContents.map((tabContent, i) => {
              return (
                <div 
                  key={i}
                  className={i === activeTab ? "tab-content active" : "tab-content"}
                  data-tab_number={i}
                >
                  {tabContent}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

