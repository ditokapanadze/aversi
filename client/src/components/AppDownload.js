import React from "react";
import "./AppDownload.css";
import iphone from "../assets/iphone.png";
import Apple from "../assets/Apple.png";
import GooglePlay from "../assets/googlePlay.png";

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
          <li className="download__li">
            <a
              href="https://play.google.com/store/apps/details?id=com.leavingstone.aversi&hl=ka&gl=US"
              target="_blank"
            >
              <img src={GooglePlay} />{" "}
            </a>
            <a
              href="https://apps.apple.com/app/aversi/id1195068578"
              target="_blank"
            >
              {" "}
              <img src={Apple} />{" "}
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppDownload;
