import {
  IonButton,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/react"
import { addOutline, heartOutline } from "ionicons/icons"
import React, { Component } from "react"

class ItemProductFavorite extends Component {
  render() {
    return (
      <IonItem>
        <IonImg
          slot="start"
          style={{ width: "60px", height: "60px" }}
          src="https://b.zmtcdn.com/data/pictures/chains/1/18731481/d60a7f41de179c18cbec5e9250c9d322.jpg"
        ></IonImg>
        <IonLabel>
          <IonText color="dark">
            <h6>
              <b>Es Espresso</b>
            </h6>
          </IonText>
          <div className="py-text">
            <IonText color="dark">Rp 21.000</IonText>
          </div>
          <IonText color="dark">
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              vel.
            </small>
          </IonText>
        </IonLabel>
        <div slot="end">
          <IonButton
            className="icon-button"
            size="large"
            color="dark"
            fill="clear"
          >
            <IonIcon icon={heartOutline}></IonIcon>
          </IonButton>
        </div>
      </IonItem>
    )
  }
}

export default ItemProductFavorite
