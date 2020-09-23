import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCol,
  IonIcon,
  IonImg,
  IonRow,
  IonText,
} from "@ionic/react"
import { addOutline, heartOutline } from "ionicons/icons"
import React, { Component } from "react"

type ItemCardProps = {
  image: string
  name: string
  harga: string
}

class ItemCard extends Component<ItemCardProps> {
  render() {
    return (
      <IonCard className="rounded shadow ion-text-left initial-scroll">
        <IonCardContent className="ion-no-padding">
          <IonImg
            style={{ width: "100%", height: "100%" }}
            src={this.props.image}
          ></IonImg>
        </IonCardContent>
        <IonCardSubtitle className="ion-padding">
          <IonRow>
            <IonCol size="8">
              <IonText color="dark">
                <div className="text-word-wrap">
                  <b>{this.props.name}</b>
                </div>
              </IonText>
              <IonText>
                <div className="mt-1">{this.props.harga}</div>
              </IonText>
            </IonCol>
            <IonCol size="4" className="ion-text-right">
              <IonButton
                className="icon-button"
                size="small"
                color="dark"
                fill="clear"
              >
                <IonIcon icon={heartOutline}></IonIcon>
              </IonButton>
              <IonButton
                className="absolute-button icon-button"
                size="small"
                color="dark"
                fill="solid"
              >
                <IonIcon icon={addOutline}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonCardSubtitle>
      </IonCard>
    )
  }
}

export default ItemCard
