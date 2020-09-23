import React from "react"
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import "./ProductList.css"
import { addOutline, heartOutline } from "ionicons/icons"
import ItemProduct from "../../components/item/ItemProduct"

const ProductList: React.FC = () => {
  return (
    <IonPage title="JJ FA">
      <IonHeader className="ion-no-border">
        <IonToolbar color="primary"></IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="primary">
        <IonGrid className="ion-padding-horizontal">
          <IonRow>
            <IonCol>
              <IonText color="dark">
                <h3>
                  <b>Pilih Menu</b>
                </h3>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow className="ion-justify-content-between ion-padding-horizontal">
            <IonCol size="6">
              <IonButton
                className="shadow rounded-button"
                expand="block"
                color="dark"
                shape="round"
                mode="ios"
              >
                Delivery
              </IonButton>
            </IonCol>
            <IonCol size="6">
              <IonButton
                className="shadow rounded-button"
                expand="block"
                color="light"
                shape="round"
                mode="ios"
              >
                Pick Up
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-home-container text-dark">
          <IonRow>
            <IonCol size="12">
              <IonList lines="none">
                <IonListHeader>
                  <IonText color="dark">
                    <b>Your Favorite</b>
                  </IonText>
                </IonListHeader>

                <ItemProduct></ItemProduct>
                <ItemProduct></ItemProduct>
                <ItemProduct></ItemProduct>
                <ItemProduct></ItemProduct>
              </IonList>
            </IonCol>
            <IonCol size="12">
              <IonList lines="none">
                <IonListHeader>
                  <IonText color="dark">
                    <b>Iced Cofee</b>
                  </IonText>
                </IonListHeader>

                <ItemProduct></ItemProduct>
                <ItemProduct></ItemProduct>
                <ItemProduct></ItemProduct>
                <ItemProduct></ItemProduct>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default ProductList
