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

function CompanyPresentation({ type, img, title, text, action }) {
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

  if(type === 2) {
    action = version === 'mob' ? true : false;
  }

  return (
      <section className="company-presentation">
        
        {/* background config*/}
        { version === 'desk' &&
         <div className="company-presentation__bg-layer"></div>
        }
        { version === 'mob' && type === 2 &&
         <div 
          className="company-presentation__bg-layer"
          style={{width: "100%"}}></div>
        }
        { version === 'mob' && type === 3 &&
         <div 
          className="company-presentation__bg-layer"
          style={{width: "80%"}}></div>
        }
             
        <div
          className="company-presentation__content"
          style={type !== 1 && clientWidth > 640 ? {padding: "15px 0"} : null}
        >
          <h1
            className="company-presentation__title"
            style={type === 1 && version === 'mob' ? {position: "absolute", top: '4vw', lineHeight: "27px"} : null}
          >
            {title}
          </h1>
          <img className="company-presentation__img" src={img} alt="marksem"/>
          <div
            className="company-presentation__info"
            style={type !== 1  
                    ? null
                    : version === "mob" && clientWidth < 980
                        ? {fontSize: "18px"}
                        : {fontSize: "28px", lineHeight: "35px"}
                  }
          >
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

export default CompanyPresentation;