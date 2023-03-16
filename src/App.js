import React from "react";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer"
import './resources/styles.css';
import Featured from "./components/featured"
import Venue from "./components/venueNfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import { Element } from "react-scroll";

function App() {

  
  return (
    <>
    <Header/>
    
    <Element name="featured">
    <Featured/>
    </Element>
   
    <Element name="venueInfo">
    <Venue/>
    </Element>
   
    <Element name="highlights">
    <Highlights/>
    </Element>
   
    <Element name="pricing">
    <Pricing/>
    </Element>
   
    <Element name="location">
    <Location/>
    </Element>

      <Footer/>
    </>
  );
}

export default App;
