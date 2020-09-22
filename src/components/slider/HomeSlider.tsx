import { IonCard, IonCardContent, IonSlide, IonSlides } from "@ionic/react"
import React, { Component } from "react"

const slideOpts = {
  initialSlide: 1,
  speed: 400,
}

class HomeSlider extends Component {
  render() {
    return (
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
          <IonCard className="rounded shadow" style={{ width: "100%" }}>
            <IonCardContent style={{ height: "175px" }}>
              <img
                src="https://s.loker.id/uploads/2019/07/kopi-janji-jiwa.png"
                alt="abc"
                height="100%"
              />
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard className="rounded shadow" style={{ width: "100%" }}>
            <IonCardContent style={{ height: "175px" }}>
              <img
                src="https://s.loker.id/uploads/2019/07/kopi-janji-jiwa.png"
                alt="abc"
                height="100%"
              />
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard className="rounded shadow" style={{ width: "100%" }}>
            <IonCardContent style={{ height: "175px" }}>
              <img
                src="https://s.loker.id/uploads/2019/07/kopi-janji-jiwa.png"
                alt="abc"
                height="100%"
              />
            </IonCardContent>
          </IonCard>
        </IonSlide>
      </IonSlides>
    )
  }
}

export default HomeSlider
