import React from "react"
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  withIonLifeCycle,
} from "@ionic/react"
import { notificationsOutline } from "ionicons/icons"

import "./Home.css"
import featuredProductApi from "../../api/featured-product.api"
import HomeSlider from "../../components/slider/HomeSlider"
import HomeTagSlider from "../../components/slider/HomeTagSlider"
import HomeTagProductSlider from "../../components/slider/HomeTagProductSlider"

type HomeState = {
  featuredProduct: Array<Object>
}

class Home extends React.Component<{}, HomeState> {
  render() {
    const featuredProduct = featuredProductApi
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
                  src="https://s2.wp.com/wp-content/plugins/amp-1.4/assets/images/amp-page-fallback-wordpress-publisher-logo.png"
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
            <div>
              <HomeTagSlider></HomeTagSlider>
            </div>
            <div>
              <HomeTagProductSlider
                products={featuredProduct}
              ></HomeTagProductSlider>
            </div>
            <div className="container">
              <IonRow className="ion-align-items-center">
                <IonCol size="6">
                  <b>Terakhir Dibeli</b>
                </IonCol>
                <IonCol size="6" className="ion-text-right">
                  <IonButton size="small" color="secondary" fill="clear">
                    Lihat Semua
                  </IonButton>
                </IonCol>
              </IonRow>
            </div>
            <div>
              <HomeTagProductSlider
                products={featuredProduct}
              ></HomeTagProductSlider>
            </div>
          </IonGrid>
        </IonContent>
      </IonPage>
    )
  }
}

export default withIonLifeCycle(Home)
