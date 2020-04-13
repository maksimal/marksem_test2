import React from "react";
import PropTypes from "prop-types";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

import "./SubscribeBlock.scss";

function SubscribeBlock({ type }) {
  const content1 = {
    type: 1,
    placeholder: "Enter your email address",
    btn: "Submit"
  };

  const content2 = {
    type: 2,
    placeholder: "E-mail",
    btn: "Subscribe",
    bg: "./img/subscribe-block.png"
  };

  const content = type === "minimal" ? content1 : content2;

  return (
    <section
      className={`subscribe-block-${content.type}`}
      style={content.bg ? { backgroundImage: `url(${content.bg})` } : null}
    >
      {content.type === 1 ? (
        <div className={`subscribe-block-${content.type}__text`}>
          Our <span style={{ color: "#000" }}>Newsletter</span>.
        </div>
      ) : (
          <div className={`subscribe-block-${content.type}__info`}>
            <h2 className={`subscribe-block-${content.type}__title`}>
              let’s stay in touch
            </h2>
            <div className={`subscribe-block-${content.type}__text`}>
              subscribe to our newsletter and get updated with marksem news
            </div>
          </div>
      )}
      <SubscribeForm placeholder={content.placeholder} btnText={content.btn} />
    </section>
  );
}

SubscribeBlock.propTypes = {
  type: PropTypes.oneOf(['minimal', 'maxiaml'])
}

export default SubscribeBlock;
