import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button/Button';
import "./CompanyPresentation.scss";

function debounce(handler, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    
    timer = setTimeout(() => {
      handler();
    }, ms)
  };
}

function CompanyPresentation({img, title, info, action, bg }) {
  const [version, setVersion] = useState();
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setClientWidth(window.innerWidth);
    }, 1000);
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    clientWidth < 1200 ? setVersion('mob') : setVersion('desk');
  }, [clientWidth]);

  return (
      <section className="company-presentation">
        { bg &&
          <div className="company-presentation__bg-layer"></div>
        }   
        <div className="company-presentation__content">
          {title}
          <img className="company-presentation__img" src={img} alt="marksem"/>
            {info}
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
  title: PropTypes.node,
  text: PropTypes.node
}

export default CompanyPresentation;