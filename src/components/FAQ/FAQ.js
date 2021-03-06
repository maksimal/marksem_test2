import React, { useState } from 'react';
import "./FAQ.scss"

const FAQ = ({
  queston,
  answer
}) => {

  const toggleAnswer = (e) => {
    let collapsableContent = e.currentTarget.nextElementSibling;
    if (collapsableContent.style.maxHeight) {
      collapsableContent.style.maxHeight = null;
    } else {
      collapsableContent.style.maxHeight = collapsableContent.scrollHeight + "px";
    }

    setIsCollapsed(!isCollapsed);
  };

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="faq">

      <button className="question" onClick={toggleAnswer}>
        <div className={isCollapsed ? "question__icon question__icon-plus" : "question__icon question__icon-minus"}></div>
        <span className="question__text">{queston}</span>
      </button>
      <div className="collapsable">
        {answer.map((p,i) => <p key={i} className="answer">{p}</p>)}
      </div>

    </div>
  );
}

export default FAQ;
