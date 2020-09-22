import React, { Component } from "react"
import { IonButton, IonCol, IonRow, IonSlide, IonSlides } from "@ionic/react"

const tagSlideOpts = {
  initialSlide: 0,
  slidesPerView: 3,
  speed: 400,
}

class HomeTagSlider extends Component {
  render() {
    return (
      <IonSlides className="text-slide" pager={false} options={tagSlideOpts}>
        <IonSlide>
          <IonButton
            className="tab-active"
            fill="clear"
            size="small"
            color="dark"
          >
            Popular
          </IonButton>
        </IonSlide>
        <IonSlide>
          <IonButton fill="clear" size="small" color="dark">
            Untukmu
          </IonButton>
        </IonSlide>
        <IonSlide>
          <IonButton fill="clear" size="small" color="dark">
            Kopi
          </IonButton>
        </IonSlide>
        <IonSlide>
          <IonButton fill="clear" size="small" color="dark">
            Teh
          </IonButton>
        </IonSlide>
        <IonSlide>
          <IonButton fill="clear" size="small" color="dark">
            Snack
          </IonButton>
        </IonSlide>
      </IonSlides>
    )
  }
}

export default HomeTagSlider
