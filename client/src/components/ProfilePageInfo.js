import React, { useEffect, useState } from "react";
import "./ProfilePageInfo.css";
import avatar from "../assets/profile.jpg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/auth";
import axios from "axios";
import FileBase from "react-file-base64";

function ProfilePageInfo() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const userAdress = auth?.user?.adress;
  const userNumber = auth?.user?.mobileNumber;
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [photo, setPhoto] = useState("");
  const [status, setStatus] = useState(auth?.user?.photo);
  const [showUpload, setShowUpload] = useState(false);
  const [display, setDisplay] = useState("none");

  console.log(auth.user);

  let dispatch = useDispatch();
  const token = localStorage.getItem("authToken");

  const upload = async () => {
    setShowUpload(false);
    let photoBase = photo.base64;
    console.log(photoBase);
    console.log(photo);
    // try {
    //   const { data } = await axios.put(
    //     "http://localhost:5001/api/infoupdate/changeAvatar",
    //     {
    //       photo,
    //     }
    //   );
    // } catch (err) {
    //   console.log(err);
    // }
    axios
      .put("https://aversi.herokuapp.com/api/infoupdate/changeAvatar", {
        photo,
        token,
      })
      .then((res) => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };

        dispatch(getUser(config));
        console.log(res);
        setPhoto("");
      })
      .catch((err) => console.log(err));
  };

  const updateInfo = async (e) => {
    e.preventDefault();
    if (number || adress) {
      try {
        const { data } = await axios.put(
          "https://aversi.herokuapp.com/api/infoupdate/changeInfo",
          { adress, number, token }
        );
        setDisplay("");
        setTimeout(() => {
          setDisplay("none");
        }, 4000);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="profie__info">
      <p className="info__title"> პირადი ინფრომაციის რედაქტირება</p>
      <div className="avatar">
        <img
          src={
            auth?.user?.photo ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          }
          alt="Avatar"
        />
        <p className="change__avatar"></p>
        {showUpload && (
          <FileBase
            type="photo"
            multiple={false}
            placeholder="asdasd"
            onDone={({ base64 }) => setPhoto({ base64 })}
          />
        )}
      </div>
      {showUpload && photo ? (
        <button onClick={upload}>ატვირთვა</button>
      ) : (
        <button onClick={() => setShowUpload(true)}>ავატარის შეცვლა</button>
      )}

      <p className="user__name">
        {" "}
        მომხმარებლის სახელი : <span> {auth?.user?.username}</span>
      </p>
      <form onSubmit={updateInfo}>
        <p>მობილურის ნომერი:</p>
        <input
          label="asdasdasd"
          type="text"
          value={number || userNumber || "  შეიყვანეთ ნომერი"}
          onChange={(e) => setNumber(e.target.value)}
        />
        <p>ელ-ფოსტა:</p>
        <input
          value={auth?.user?.email}
          className="profile__email__input"
          type="email"
        />
        <p>მისამართი:</p>
        <input
          type="text"
          value={adress || userAdress || "  შეიყვანეთ მისამართი"}
          onChange={(e) => setAdress(e.target.value)}
        />
        <button className="save__btn" type="submit">
          {" "}
          შენახვა
        </button>
        <p className="save__popup" style={{ display }}>
          {" "}
          მონაცემები განახლებულია
        </p>
      </form>
    </div>
  );
}

export default ProfilePageInfo;
