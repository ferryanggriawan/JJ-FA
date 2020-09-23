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
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import "./History.css"
import { notificationsOutline } from "ionicons/icons"

const History: React.FC = () => {
  return (
    <IonPage title="JJ FA">
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
      <IonContent fullscreen color="primary">
        <IonGrid className="ion-padding-horizontal">
          <IonRow>
            <IonCol>
              <IonText color="dark">
                <h3>
                  <b>History</b>
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
                On Going
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
                History
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-home-container text-dark">
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
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default History
