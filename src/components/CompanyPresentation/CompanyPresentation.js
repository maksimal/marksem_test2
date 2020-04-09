import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/Button/Button';
import "./CompanyPresentation.scss";

function CompanyPresentation({ img, title, text }) {

  return (
      <section className="company-presentation">
        <div className="company-presentation__bg-layer"></div>
        <div className="company-presentation__img-layer" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="company-presentation__content">
          <h1 className="company-presentation__title">{title}</h1>
          <div className="company-presentation__info">
            {text}
          </div>
          <Button
            classList="btn-main company-presentation__action"
            text="Learn more"
          />
        </div>
      </section>

  );
}

CompanyPresentation.propTypes = {
  title: PropTypes.string,
  text: PropTypes.node
}

export default CompanyPresentation;