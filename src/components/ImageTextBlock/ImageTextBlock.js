import React from 'react';
import ReactPlayer2 from '../ReactPlayer2';
import "./ImageTextBlock.scss"
import Button from '../shared/Button/Button';
import StyledLink from '../shared/StyledLink/index';
import clsx from "clsx";
import { useState } from 'react';

function ImageTextBlock({
  type = "1",
  title = "Default title",
  mediaType = "img",
  mediaPosition = "right",
  imgUrl = "./img/investment-metrics.png",
  enableMediaWrap,
  enableFolding,
  mainContentStyle,
  videoUrl,
  videoThumbnailUrl,
  actionElementType,
  actionElementText,
  isBackground,
  actionElementAlign = "center",
  actionOnClick,
  children
}) {

  const mediaContainerClasses = clsx(
    "media-container",
    { "float": enableMediaWrap }
  );

  const [showAllMainContent, setShowAllMainContent] = useState(false);

  const mainTextClasses = clsx({
    "main-text": true,
    "folded-text": enableFolding && !showAllMainContent,
  })



  return (
    <div className={isBackground ? "image-text-block_background image-text-block" : "image-text-block"} >
      <div className="container">
        <div
          className={`image-text-block__content image-text-block__content-${mediaPosition}`}
          style={mainContentStyle}
        >

          <div className={`title-container title-container__${mediaPosition} title-container-media-sm`}>
            <h2 className={`title title__${mediaPosition}`}>{title}</h2>
          </div>

          <div className={mediaContainerClasses}>
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

            <div className={mainTextClasses}>

              {
                React.Children.map(children, ((child, i) => <div key={i} className="main-text__item">{child}</div>))
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

              {
                enableFolding && !showAllMainContent &&
                <div className="semitransparent-gradient">
                </div>
              }

            </div>

            {
              enableFolding &&
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button style={{ backgroundColor: "white", color: "black", border: "1px solid #264B93" }} text={showAllMainContent ? "Згорнути" : "Показати більше"} classList="btn-main" onClick={() => setShowAllMainContent(!showAllMainContent)}></Button>
              </div>
            }


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