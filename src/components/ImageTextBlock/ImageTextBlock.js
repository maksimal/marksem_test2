import React from 'react';
import ReactPlayer2 from '../ReactPlayer2';
import "./ImageTextBlock.scss"
import Button from './../shared/Button/Button';
import StyledLink from './../shared/StyledLink/index';

function ImageTextBlock(
  {
    type = "1",
    title = "Default title",
    mediaType = "img",
    mediaPosition = "right",
    mediaStyle,
    imgUrl = "./img/investment-metrics.png",
    videoUrl,
    videoThumbnailUrl,
    actionElementType,
    actionElementText,
    actionElementAlign = "center",
    actionOnClick,
    mainContent = ["Some content", "Some content"],
  }
) {



  return (
    <div className="image-text-block background-wrapper">
      <div className={`background background__style${type}-${mediaPosition}`}></div>
      <div className="container">
        <div className={`image-text-block__content image-text-block__content-${mediaPosition}`}>

          <div className={`title-container title-container__${mediaPosition} title-container-media-sm`}>
            <h2 className={`title title__${mediaPosition}`}>{title}</h2>
          </div>

          <div className="media-container" style={{ ...mediaStyle }}>
            <div className={`media media__style${type}-${mediaPosition}`}>
              {mediaType === "video" &&
                <ReactPlayer2
                  videoUrl={videoUrl}
                  videoThumbnailUrl={videoThumbnailUrl}
                />
              }

              {mediaType === "img" &&
                <img className="img" src={imgUrl} />
              }
            </div>
          </div>


          <div className={`main-text-container main-text-container__${mediaPosition} `}>

            <div className={`title-container title-container__${mediaPosition} title-container-media-lg`}>
              <h2 className={`title title__${mediaPosition}`}>{title}</h2>
            </div>

            <div className="main-text">

              {
                mainContent.map((p, i) => {
                  return (
                    <div key={i} className="main-text__item">{p}</div>
                  )
                })
              }

              {actionElementText &&
                actionElementType === "button" &&
                actionElementAlign !== "image" &&
                actionElementAlign !== "bottom" &&
                <div className={`action-element-container action-element-container__${actionElementAlign}`}>
                  <Button onClick={actionOnClick} classList="btn-main" text={actionElementText} />
                </div>
              }

              {actionElementText &&
                actionElementType === "link" &&
                actionElementAlign !== "image" &&
                <div className={`action-element-container action-element-container__${actionElementAlign}`}>
                  <StyledLink linkText={actionElementText} linkURL={actionOnClick} />
                </div>
              }

            </div>
          </div>

          {actionElementText &&
            actionElementType === "link" &&
            actionElementAlign === "image" &&
            <div className={`action-container action-container__${mediaPosition} `}>
              <StyledLink linkText={actionElementText} linkURL={actionOnClick} />
            </div>
          }

          {actionElementText &&
            actionElementType === "button" &&
            actionElementAlign === "bottom" &&
            <div className="action-element-bottom">
              <Button onClick={actionOnClick} classList="btn-main" text={actionElementText} />
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default ImageTextBlock;