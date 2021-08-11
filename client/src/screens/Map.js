import React, { Component, useState } from "react";
import GoogleMapReact from "google-map-react";
import "./maps.css";

const Map = ({ center, zoom }) => {
  const [defZoom, setDfaultZoom] = useState(11);
  return (
    <>
      <div className="map" style={{ height: "60vh", width: "70%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB8po49Z5kWrqzVacpzVbFGGKE8MbI7-4I" }}
          defaultCenter={{
            lat: 41.716667,
            lng: 44.783333,
          }}
          defaultZoom={defZoom}
        >
          <div lat={41.72915295464601} lng={44.75867348258471}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div lat={41.72658669836932} lng={44.725334379845144}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div lat={41.72658669836932} lng={44.78112909778447}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div lat={41.73372179353973} lng={44.79695539820904}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div lat={41.694828199340584} lng={44.80239629709913}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div lat={41.77331246574917} lng={44.77485933205037}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div lat={41.77331246574917} lng={44.77485933205037}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div lat={41.712560398182845} lng={44.80330592690127}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div lat={41.712560398182845} lng={44.80330592690127}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div lat={41.725464267111384} lng={44.79972842817574}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div lat={41.801723807984736} lng={44.82497575469007}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div lat={41.70576875505145} lng={44.8508982206045}>
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
      <div className="adress">
        <i class="fas fa-map-marker-alt"></i>
        <p value="test" onClick={(e) => console.log(e.target)}>
          თბილისი, პოლიტკოვსკაია 79
        </p>
      </div>
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
