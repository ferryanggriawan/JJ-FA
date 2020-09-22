import React from "react"
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  withIonLifeCycle,
} from "@ionic/react"

import "./Home.css"
import featuredProductApi from "../../api/featured-product.api"
import { notificationsOutline } from "ionicons/icons"
import HomeSlider from "../../components/slider/HomeSlider"

type HomeState = {
  data: Array<Object>
}

class Home extends React.Component<{}, HomeState> {
  ionViewWillEnter() {
    const data = featuredProductApi
    this.setState({ data: data })
  }

  ionViewWillLeave() {}

  ionViewDidEnter() {}

  ionViewDidLeave() {}

  render() {
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar color="primary">
            <IonTitle slot="start">
              <IonChip color="white">
                <IonAvatar style={{ width: "20px", height: "20px" }}>
                  <img
                    src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                    alt="imh"
                  />
                </IonAvatar>
                <IonLabel color="dark">
                  Halo, <b>Niko!</b>
                </IonLabel>
              </IonChip>
            </IonTitle>
            <IonButtons slot="end" className="margin-right-20">
              <IonButton size="large" color="dark" fill="clear">
                <IonIcon
                  style={{ width: "25px", height: "25px" }}
                  icon={notificationsOutline}
                />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color="primary">
          <IonGrid className="ion-background-primary ion-padding-horizontal">
            <IonRow>
              <IonCol className="ion-padding-start">
                <img
                  src="https://s.loker.id/uploads/2019/07/kopi-janji-jiwa.png"
                  alt="logo"
                  height="80px"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="11">
                <IonButton expand="block" color="dark" shape="round" mode="ios">
                  Pesan Sekarang!
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid className="ion-home-container text-dark">
            <IonRow className="ion-justify-content-center">
              <IonCol size="11">
                <HomeSlider></HomeSlider>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-padding-horizontal">
              <IonCol className="ion-text-center">Popular</IonCol>
              <IonCol className="ion-text-center">Untukmu</IonCol>
              <IonCol className="ion-text-center">Kopi</IonCol>
              <IonCol className="ion-text-center">Teh</IonCol>
              <IonCol className="ion-text-center">Snack</IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-start  ion-nowrap ion-padding-horizontal">
              <IonCol size="6" className="ion-text-center">
                <IonCard className="rounded shadow ion-text-left">
                  <IonCardContent>
                    <IonImg src="https://s.loker.id/uploads/2019/07/kopi-janji-jiwa.png"></IonImg>
                  </IonCardContent>
                  <IonCardSubtitle className="ion-padding">
                    <div>Es Cofee</div>
                    <div>Rp 21.500</div>
                  </IonCardSubtitle>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    )
  }
}

export default withIonLifeCycle(Home)
