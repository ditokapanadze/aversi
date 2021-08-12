import React, { Component, useState } from "react";
import GoogleMapReact from "google-map-react";
import Help from "../components/Help";
import "./maps.css";

const Map = ({ center, zoom }) => {
  const [defZoom, setDfaultZoom] = useState(11);
  const [lat, setLat] = useState(41.716667);
  const [lng, setLng] = useState(44.783333);

  const test = (e) => {
    const { lng } = JSON.parse(e.target.value);
    const { lat } = JSON.parse(e.target.value);
    setLng(lng);
    setLat(lat);
    setDfaultZoom(20);
    console.log(defZoom);
  };
  return (
    <>
      <div className="map__container">
        <div className="map" style={{ height: "60vh", width: "98%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB8po49Z5kWrqzVacpzVbFGGKE8MbI7-4I",
            }}
            center={{
              lat,
              // lat: 41.716667,
              // lng: 44.783333,
              lng,
            }}
            zoom={defZoom}
          >
            <div lat={41.704613554638556} lng={44.790182962300555}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.69268158801886} lng={44.800303974372994}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.69418752291745} lng={44.80221294951653}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.70711256925316} lng={44.78497604116095}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.706237709799716} lng={44.78712810183882}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.70992639142548} lng={44.765172632556954}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.708198564345615} lng={44.77458968773802}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.72649419475395} lng={44.76699427086762}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.720712874344116} lng={44.79715615602019}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.77236897156236} lng={44.77500508351869}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.801723807984736} lng={44.82497575469007}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.755625023344614} lng={44.774602693363356}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.728448341118714} lng={44.766538260367625}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div lat={41.71950074486958} lng={44.774226317057554}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
          </GoogleMapReact>
        </div>
      </div>
      <div className="adress">
        <ul className="adress__ul">
          <li value="test">
            <button
              value={JSON.stringify({
                lat: 41.704613554638556,
                lng: 44.790182962300555,
              })}
              onClick={test}
              className="map__button"
            >
              <i class="fas fa-map-marker-alt"></i> კოსტავას ქ. №11
            </button>
          </li>
          <li value="test">
            <button
              value={JSON.stringify({
                lat: 41.69268158801886,
                lng: 44.800303974372994,
              })}
              onClick={test}
              className="map__button"
            >
              <i class="fas fa-map-marker-alt"></i> გიორგი ლეონიძის ჩიხი №4/2
            </button>
          </li>
          <li value="test">
            <button
              value={JSON.stringify({
                lat: 41.69418752291745,
                lng: 44.80221294951653,
              })}
              onClick={test}
              className="map__button"
            >
              <i class="fas fa-map-marker-alt"></i> პუშკინის ქ. №11
            </button>
          </li>
          <li value="test">
            <button
              value={JSON.stringify({
                lat: 41.70711256925316,
                lng: 44.78497604116095,
              })}
              onClick={test}
              className="map__button"
            >
              <i class="fas fa-map-marker-alt"></i> მელიქიშვილის ქ. №8/2
            </button>
          </li>
          <li value="test">
            <button
              value={JSON.stringify({
                lat: 41.706237709799716,
                lng: 44.78712810183882,
              })}
              onClick={test}
              className="map__button"
            >
              <i class="fas fa-map-marker-alt"></i> კოსტავას ქ. №22
              (ფილარმონიასთან)
            </button>
          </li>
          <li value="test">
            <button
              value={JSON.stringify({
                lat: 41.70992639142548,
                lng: 44.765172632556954,
              })}
              onClick={test}
              className="map__button"
            >
              <i class="fas fa-map-marker-alt"></i> ჭავჭავაძის გამზ. №48
            </button>
          </li>
          <li value="test">
            <button
              value={JSON.stringify({
                lat: 41.708198564345615,
                lng: 44.77458968773802,
              })}
              onClick={test}
              className="map__button"
            >
              <i class="fas fa-map-marker-alt"></i> ფალიაშვილის ქ. №15
            </button>
          </li>
          <li value="test">
            <button
              value={JSON.stringify({
                lat: 41.72649419475395,
                lng: 44.76699427086762,
              })}
              onClick={test}
              className="map__button"
            >
              <i class="fas fa-map-marker-alt"></i> ა.ყაზბეგის გამზ. №5
            </button>
          </li>
          <li value="test">
            <button
              value={JSON.stringify({
                lat: 41.720712874344116,
                lng: 44.79715615602019,
              })}
              onClick={test}
              className="map__button"
            >
              <i class="fas fa-map-marker-alt"></i> თ.მეფის გამზ. №28-30
            </button>
          </li>
          <li value="test">
            <button
              value={JSON.stringify({
                lat: 41.77236897156236,
                lng: 44.77500508351869,
              })}
              onClick={test}
              className="map__button"
            >
              <i class="fas fa-map-marker-alt"></i> ლუბლიანას ქ. №13გ
            </button>
          </li>

          <li value="test">
            <button
              value={JSON.stringify({
                lat: 41.750092854022554,
                lng: 44.77739091952605,
              })}
              onClick={test}
              className="map__button"
            >
              <i class="fas fa-map-marker-alt"></i> ა.წერეთლის გამზ. №143
            </button>
          </li>
          <li value="test">
            <button
              value={JSON.stringify({
                lat: 41.755625023344614,
                lng: 44.774602693363356,
              })}
              onClick={test}
              className="map__button"
            >
              <i class="fas fa-map-marker-alt"></i> დიღმის მასივი, II კვარ.
              კორ.6 ბ.
            </button>
          </li>
        </ul>
      </div>
      <Help />
    </>
  );
};

// Map.defaultProps = {
//   center: {
//     lat: 41.716667,
//     lng: 44.783333,
//   },
//   zoom: 11,
// };
export default Map;

// bootstrapURLKeys={{ key: "AIzaSyB8po49Z5kWrqzVacpzVbFGGKE8MbI7-4I" }}
