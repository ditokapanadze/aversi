import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BackgroundBanner from "./components/BackgroundBanner";
import ServiceCards from "./components/ServiceCards";
import SaleLeaders from "./components/SaleLeaders";
import Sales from "./components/Sales";
import Catalogue from "./components/Catalogue";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <BackgroundBanner />
      <ServiceCards />
      <SaleLeaders />
      <Sales />
      <Catalogue />
      <AppDownload />
      <Footer />
    </div>
  );
}

export default App;
