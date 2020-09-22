import React from "react"
import { Redirect, Route } from "react-router-dom"
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { archiveOutline, beerOutline, homeOutline } from "ionicons/icons"

/* Theme variables */
import "./theme/theme"

import Home from "./pages/home/Home"
import ProductList from "./pages/product/ProductList"
import History from "./pages/history/History"

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/product-list" component={ProductList} exact={true} />
          <Route path="/history" component={History} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon color="dark" icon={homeOutline} />
          </IonTabButton>
          <IonTabButton tab="product-list" href="/product-list">
            <IonIcon color="dark" icon={beerOutline} />
          </IonTabButton>
          <IonTabButton tab="history" href="/history">
            <IonIcon color="dark" icon={archiveOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)

export default App
