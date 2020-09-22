import {
  IonCard,
  IonCardContent,
  IonImg,
  IonSlide,
  IonSlides,
} from "@ionic/react"
import React, { Component } from "react"
import sliderApi from "../../api/slider.api"

const imageSlideOpts = {
  initialSlide: 0,
  speed: 400,
}

const sliderData = sliderApi

class HomeSlider extends Component {
  render() {
    return (
      <IonSlides className="image-slide" pager={true} options={imageSlideOpts}>
        {sliderData.map((slide, index) => (
          <IonSlide key={index}>
            <IonCard className="rounded shadow" style={{ width: "100%" }}>
              <IonCardContent
                class="ion-no-padding"
                style={{ height: "175px" }}
              >
                <IonImg src={slide.img}></IonImg>
              </IonCardContent>
            </IonCard>
          </IonSlide>
        ))}
      </IonSlides>
    )
  }
}

export default HomeSlider
