import React, { Component } from "react"
import { IonCol, IonRow, IonSlide, IonSlides } from "@ionic/react"
import ItemCard from "../card/ItemCard"

const producSlideOpts = {
  initialSlide: 0,
  slidesPerView: 2,
  speed: 400,
}

class HomeTagProductSlider extends Component {
  render() {
    return (
      <IonSlides
        className="image-slide-small-space ion-padding-horizontal"
        pager={false}
        options={producSlideOpts}
      >
        <IonSlide>
          <ItemCard
            image="https://s.loker.id/uploads/2019/07/kopi-janji-jiwa.png"
            name="Es Teh"
            harga="Rp 20.000"
          ></ItemCard>
        </IonSlide>
        <IonSlide>
          <ItemCard
            image="https://s.loker.id/uploads/2019/07/kopi-janji-jiwa.png"
            name="Es Teh"
            harga="Rp 20.000"
          ></ItemCard>
        </IonSlide>
        <IonSlide>
          <ItemCard
            image="https://s.loker.id/uploads/2019/07/kopi-janji-jiwa.png"
            name="Es Teh"
            harga="Rp 20.000"
          ></ItemCard>
        </IonSlide>
        <IonSlide>
          <ItemCard
            image="https://s.loker.id/uploads/2019/07/kopi-janji-jiwa.png"
            name="Es Teh"
            harga="Rp 20.000"
          ></ItemCard>
        </IonSlide>
        <IonSlide>
          <ItemCard
            image="https://s.loker.id/uploads/2019/07/kopi-janji-jiwa.png"
            name="Es Teh"
            harga="Rp 20.000"
          ></ItemCard>
        </IonSlide>
      </IonSlides>
    )
  }
}

export default HomeTagProductSlider
