import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { PrimaryInfo } from "./primary-info";
import { Navbar } from "./navbar";
import { HeroWrap } from "./hero-wrap";
import { ProductSection } from "./product-section";
import { SubscribeSection } from "./subscribe-section";
import { Footer } from "./footer";

ReactDOM.render(
  <div>
    <PrimaryInfo />
    <Navbar />
    <HeroWrap />
    <ProductSection />
    <SubscribeSection />
    <Footer />
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
