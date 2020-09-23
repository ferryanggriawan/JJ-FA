import React, { Component } from "react"
import { IonButton, IonSlide, IonSlides, withIonLifeCycle } from "@ionic/react"

class HomeTagSlider extends Component {
  render() {
    const tagSlideOpts = {
      initialSlide: 0,
      slidesPerView: 3,
      speed: 0,
    }

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

export default withIonLifeCycle(HomeTagSlider)
