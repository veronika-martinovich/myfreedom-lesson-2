import React from "react";
import { ProductAddToCartIcon } from "./product-add-to-cart-icon";
import { ProductBuyNowIcon } from "./product-buy-now-icon";
import { ProductHeartIcon } from "./product-heart-icon";

class Products extends React.Component {
  state = {
    products: [
      {
        image: "./images/product-1.jpg",
        name: "Bell Pepper",
        price: "120$",
        discount: "30%",
        priceSale: "80$"
      },
      {
        image: "./images/product-2.jpg",
        href: "#",
        name: "Strawberry",
        price: "120$"
      },
      {
        image: "./images/product-3.jpg",
        href: "#",
        name: "Green Beans",
        price: "120$"
      },
      {
        image: "./images/product-4.jpg",
        href: "#",
        name: "Purple Cabbage",
        price: "120$"
      },
      {
        image: "./images/product-5.jpg",
        href: "#",
        name: "Tomatoe",
        price: "120$",
        discount: "30%",
        priceSale: "80$"
      },
      {
        image: "./images/product-6.jpg",
        href: "#",
        name: "Brocolli",
        price: "120$"
      },
      {
        image: "./images/product-7.jpg",
        href: "#",
        name: "Carrots",
        price: "120$"
      },
      {
        image: "./images/product-8.jpg",
        href: "#",
        name: "Fruit Juice",
        price: "120$"
      },
      {
        image: "./images/product-9.jpg",
        href: "#",
        name: "Onion",
        price: "120$",
        discount: "30%",
        priceSale: "80$"
      },
      {
        image: "./images/product-10.jpg",
        href: "#",
        name: "Apple",
        price: "120$"
      },
      {
        image: "./images/product-11.jpg",
        href: "#",
        name: "Garlic",
        price: "120$"
      },
      {
        image: "./images/product-12.jpg",
        href: "#",
        name: "Chilli",
        price: "120$"
      }
    ]
  };

  render() {
    return (
      <div className="row">
        {this.state.products.map((item, index) => {
          
          let discount;
          let priceSale;
          if (item.discount) {
            discount = <span className="status">{item.discount}</span>;
            priceSale = <span className="price-sale">{item.priceSale}</span>;
          }

          return (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="product">
                <a href="#" className="img-prod">
                  <img
                    className="img-fluid"
                    src={item.image}
                    alt="Colorlib Template"
                  />
                  {discount}
                  <div className="overlay"></div>
                </a>
                <div className="text py-3 pb-4 px-3 text-center">
                  <h3>
                    <a href="#">{item.name}</a>
                  </h3>
                  <div className="d-flex">
                    <div className="pricing">
                      <p className="price">
                        <span
                          className={item.discount ? "mr-2 price-dc" : "mr-2"}
                        >
                          {item.price}
                        </span>
                        {priceSale}
                      </p>
                    </div>
                  </div>
                  <div className="bottom-area d-flex px-3">
                    <div className="m-auto d-flex">
                      <ProductAddToCartIcon />
                      <ProductBuyNowIcon />
                      <ProductHeartIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export { Products };
