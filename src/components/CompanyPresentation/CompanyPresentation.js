import React from 'react';
import PropTypes from 'prop-types';
import AnimationOnScroll from './../../hoc/AnimationOnScroll'
import Button from '../shared/Button/Button';
import "./CompanyPresentation.scss";

function CompanyPresentation({ img, title, text, action }) {

  return (
      <section className="company-presentation">
        <div className="company-presentation__bg-layer"></div>
        <div className="company-presentation__img-layer" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="company-presentation__content">
          <h1 className="company-presentation__title">{title}</h1>
          <div className="company-presentation__info">
            {text}
          </div>
          { action &&
            <Button
            onClick={()=>{}}
            classList="btn-main company-presentation__action"
            text="Дізнатися більше"
          />
          }
        </div>
      </section>

  );
}

CompanyPresentation.propTypes = {
  title: PropTypes.string,
  text: PropTypes.node
}
// export default CompanyPresentation;
export default CompanyPresentation;