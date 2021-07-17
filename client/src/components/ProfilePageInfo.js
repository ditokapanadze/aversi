import React, { useEffect } from "react";
import "./ProfilePageInfo.css";
import avatar from "../assets/profile.jpg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/auth";
import axios from "axios";

function ProfilePageInfo() {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="profie__info">
      <p className="info__title"> პირადი ინფრომაციის რედაქტირება</p>
      <div className="avatar">
        <img src={avatar} /> <p className="change__avatar"> სურათის შეცვლა</p>
      </div>
      <p>{auth?.user?.username}</p>
      <form>
        <p>მობილურის ნომერი:</p>
        <input label="asdasdasd" type="text" value="5996070679" />
        <p>ელ-ფოსტა:</p>
        <input value={auth?.user?.email} type="email" />
        <p>მისამართი:</p>
        <input type="text" value="რაღაცა მისამართი" />
        <button className="save__btn"> შენახვა</button>
      </form>
    </div>
  );
}

export default ProfilePageInfo;
