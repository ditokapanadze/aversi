import React, { useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import BackgroundBanner from "../components/BackgroundBanner";
import ServiceCards from "../components/ServiceCards";
import SaleLeaders from "../components/SaleLeaders";
import Sales from "../components/Sales";
import Catalogue from "../components/Catalogue";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <div className="home">
      <BackgroundBanner />
      <ServiceCards />
      <SaleLeaders />
      <Sales />
      <Catalogue />
      <AppDownload />
    </div>
  );
}

export default Home;
