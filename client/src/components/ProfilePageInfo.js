import React from "react";
import "./ProfilePageInfo.css";
import avatar from "../assets/profile.jpg";

function ProfilePageInfo() {
  return (
    <div className="profie__info">
      <p className="info__title"> პირადი ინფრომაციის რედაქტირება</p>
      <div className="avatar">
        <img src={avatar} /> <p className="change__avatar"> სურათის შეცვლა</p>
      </div>
      <form>
        <p>მობილურის ნომერი:</p>
        <input label="asdasdasd" type="text" value="5996070679" />
        <p>ელ-ფოსტა:</p>
        <input value="ditokapanadze@Gmail.com" type="email" />
        <p>მისამართი:</p>
        <input type="text" value="რაღაცა მისამართი" />
        <button className="save__btn"> შენახვა</button>
      </form>
    </div>
  );
}

export default ProfilePageInfo;
