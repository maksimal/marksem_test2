import React from 'react';
import ReactPlayer1 from './../react_player_1/index';
import ReactPlayer2 from '../ReactPlayer2';
import "./ImageTextBlock.scss"
import Button from './../shared/Button/Button';
import StyledLink from './../shared/StyledLink/index';

export default function ImageTextBlock(
  {
    style = "1",
    title = "Default title",
    mediaType = "img",
    mediaPosition = "right",
    imgUrl = "./img/investment-metrics.png",
    videoUrl,
    videoThumbnailUrl,
    actionElementType,
    actionElementText,
    actionElementAlign = "center",
    mainContent = ["Some content", "Some content"]
  }
) {

  return (
    <div className="image-text-block">
      <div className="container">
        <div className={`image-text-block__content image-text-block__content-${mediaPosition}`}>
          <div className={`background background__style${style}-${mediaPosition}`}></div>
          <div className="media-container">
            <div className={`media media__style${style}-${mediaPosition}`}>
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
            {actionElementText &&
                actionElementType === "link" &&
                actionElementAlign === "image" &&
                <div className={`action-container action-container__${mediaPosition} `}>
                  <StyledLink linkText="Learn more" />
                </div>
              }
          </div>


          <div className={`main-text-container main-text-container__${mediaPosition}`}>

            <div className={`title-container title-container__${mediaPosition}`}>
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
                <div className={`action-element-container action-element-container__${actionElementAlign}`}>
                  <Button onClick={()=>{}} classList="btn-main" text={actionElementText} />
                </div>
              }

              {actionElementText &&
                actionElementType === "link" &&
                actionElementAlign !== "image" &&
                <div className={`action-element-container action-element-container__${actionElementAlign}`}>
                  <StyledLink linkText={actionElementText} />
                </div>
              }

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


/* Вопросы по компоненту:
1. Стили этого компонента очень похожи на стили SectionType2. Куда положить общие стили? Есть ли какая-то практика и паттерн для шэрд стилей?


 */