import React from "react";
import "./AppDownload.css";
import iphone from "../assets/iphone.png";

function AppDownload() {
  return (
    <div className="app__download">
      <img src={iphone} />
      <div className="download__content">
        <h1>
          {" "}
          ჩამოტვირთე ავერსის <br /> მობილური აპლიკაცია
        </h1>
        <ul className="download__ul">
          <li className="download__li">
            <span>&#11044;</span>
            შეიძინე პროდუქცია სახელიდან გაუსვლელად
          </li>
          <li className="download__li">
            {" "}
            <span>&#11044;</span>გაეცანის რულის პროდუქციის კატალოგს
          </li>
          <li className="download__li">
            {" "}
            <span>&#11044;</span>შეამოწმე ქულები მტრედი ბრათაზე
          </li>
          <li className="download__li">
            <span>&#11044;</span>
            შეიძინე პროდუქცია სახელიდან გაუსვლელად
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppDownload;
