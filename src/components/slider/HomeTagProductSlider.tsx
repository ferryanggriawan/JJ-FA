import React, { Component } from "react"
import { IonSlide, IonSlides } from "@ionic/react"
import ItemCard from "../card/ItemCard"

interface Product {
  img: string
  name: string
  price: string
}

type HomeTagProductSliderProps = {
  products: Array<Product>
}

class HomeTagProductSlider extends Component<HomeTagProductSliderProps> {
  render() {
    if (this.props.products != null) {
      return (
        <IonSlides
          className="image-slide-small-space ion-padding-horizontal"
          pager={false}
          options={{
            nitialSlide: 0,
            slidesPerView: 2,
            speed: 400,
          }}
        >
          {this.props.products.map((product, index) => (
            <IonSlide key={index}>
              <ItemCard
                image={product.img}
                name={product.name}
                harga={`Rp ${product.price}`}
              ></ItemCard>
            </IonSlide>
          ))}
        </IonSlides>
      )
    } else {
      return <div></div>
    }
  }
}

export default HomeTagProductSlider
