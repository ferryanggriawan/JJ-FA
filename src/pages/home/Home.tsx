import React from "react"
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonPage,
  IonRadio,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  withIonLifeCycle,
} from "@ionic/react"
import { closeOutline, notificationsOutline } from "ionicons/icons"

import "./Home.css"
import featuredProductApi from "../../api/featured-product.api"
import HomeSlider from "../../components/slider/HomeSlider"
import HomeTagSlider from "../../components/slider/HomeTagSlider"
import HomeTagProductSlider from "../../components/slider/HomeTagProductSlider"
import ItemProductFavorite from "../../components/item/ItemProductFavorite"

interface HomeState {
  featuredProduct: Array<Object>
  showModal: boolean
}

interface Product {
  img: string
  name: string
  price: string
}

class Home extends React.Component<{}, HomeState> {
  constructor(p: {}) {
    super(p)
    this.state = {
      featuredProduct: [],
      showModal: false,
    }
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const featuredProduct = featuredProductApi
    const { showModal } = this.state

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
                  height="47px"
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
            <IonGrid>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                  <HomeTagSlider></HomeTagSlider>
                </IonCol>
              </IonRow>
            </IonGrid>
            <div>
              <HomeTagProductSlider
                products={featuredProduct}
                onClickAdd={(product: Product) => {
                  console.log(product)
                  this.toggleModal()
                }}
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
                onClickAdd={(product: Product) => {
                  console.log(product)
                  this.toggleModal()
                }}
              ></HomeTagProductSlider>
            </div>
          </IonGrid>

          <IonModal isOpen={showModal} cssClass="modal-absolute">
            <IonButton
              color="dark"
              className="icon-button ml-auto"
              fill="clear"
              onClick={() => this.toggleModal()}
            >
              <IonIcon icon={closeOutline}></IonIcon>
            </IonButton>
            <IonContent>
              <IonList
                lines="full"
                className="modal-content minus-modal-content"
              >
                <ItemProductFavorite></ItemProductFavorite>
              </IonList>
              <IonList lines="none" className="modal-content">
                <IonListHeader>
                  <IonText color="dark">
                    <b>Additional Topping</b>
                  </IonText>
                </IonListHeader>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <IonItem key={index}>
                    <IonCheckbox slot="start" color="dark" className="ma-1" />
                    <div className="ion-padding-start">Topping {item}</div>
                    <div slot="end" className="ion-text-right">
                      + 3.000
                    </div>
                  </IonItem>
                ))}
              </IonList>
              <IonList lines="none" className="modal-content">
                <IonListHeader>
                  <IonText color="dark">
                    <b>Sugar Level</b>
                  </IonText>
                </IonListHeader>
                {[1, 2, 3].map((item, index) => (
                  <IonItem key={index}>
                    <IonRadio slot="start" color="dark" className="ma-1" />
                    <div className="ion-padding-start">Sugar {item}</div>
                    <div slot="end" className="ion-text-right">
                      + 3.000
                    </div>
                  </IonItem>
                ))}
              </IonList>
              <IonList lines="none" className="modal-content">
                <IonListHeader>
                  <IonText color="dark">
                    <b>Ice Level</b>
                  </IonText>
                </IonListHeader>
                {[1, 2, 3].map((item, index) => (
                  <IonItem key={index}>
                    <IonRadio slot="start" color="dark" className="ma-1" />
                    <div className="ion-padding-start">Ice {item}</div>
                    <div slot="end" className="ion-text-right">
                      + 3.000
                    </div>
                  </IonItem>
                ))}
              </IonList>
              <IonList lines="none" className="modal-content">
                <IonListHeader>
                  <IonText color="dark">
                    <b>Special Instructions</b>
                  </IonText>
                </IonListHeader>
                <IonItem>
                  <IonInput
                    mode="ios"
                    value=""
                    placeholder="Instruction"
                    color="dark"
                  ></IonInput>
                </IonItem>
              </IonList>
              <IonList lines="none" className="modal-content">
                <IonListHeader>
                  <IonText color="dark">
                    <b>Qty</b>
                  </IonText>
                </IonListHeader>
                <IonItem>
                  <IonButton color="dark" className="icon-button">
                    +
                  </IonButton>
                  <div style={{ width: "50px", margin: "0 10px" }}>
                    <IonInput value="1" readonly></IonInput>
                  </div>
                  <IonButton color="dark" className="icon-button">
                    -
                  </IonButton>
                </IonItem>
              </IonList>
            </IonContent>
          </IonModal>
        </IonContent>
      </IonPage>
    )
  }
}

export default withIonLifeCycle(Home)
