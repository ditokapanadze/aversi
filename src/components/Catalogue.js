import React from "react";
import "./Catalogue.css";
import medicine from "../assets/cardmedicine.png";

function Catalogue() {
  return (
    <>
      <h1 style={{ "padding-left": 100 }}>პროდუქციის კატალოგი</h1>
      <div className="catalgue">
        <div className="cata__card">
          <img src={medicine} />
          <p>წამლები</p>
        </div>
        <div className="cata__card">
          <img src={medicine} />
          <p>წამლები</p>
        </div>
        <div className="cata__card">
          <img src={medicine} />
          <p>წამლები</p>
        </div>
        <div className="cata__card">
          <img src={medicine} />
          <p>წამლები</p>
        </div>
        <div className="cata__card">
          <img src={medicine} />
          <p>წამლები</p>
        </div>
        <div className="cata__card">
          <img src={medicine} />
          <p>წამლები</p>
        </div>
        <div className="cata__card">
          <img src={medicine} />
          <p>წამლები</p>
        </div>
        <div className="cata__card">
          <img src={medicine} />
          <p>წამლები</p>
        </div>
        <div className="cata__card">
          <img src={medicine} />
          <p>წამლები</p>
        </div>
        <div className="cata__card">
          <img src={medicine} />
          <p>წამლები</p>
        </div>
      </div>
    </>
  );
}

export default Catalogue;
