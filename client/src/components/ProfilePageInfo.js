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

  const userAdress = auth?.user?.adress;
  const userNumber = auth?.user?.mobileNumber;
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [photo, setPhoto] = useState("");
  const [status, setStatus] = useState(auth?.user?.photo);
  const [showUpload, setShowUpload] = useState(false);
  console.log(adress);
  console.log(number);
  const token = localStorage.getItem("authToken");
  const upload = async () => {
    setShowUpload(false);

    try {
      const { data } = await axios.put(
        "https://aversi.herokuapp.com/api/infoupdate/changeAvatar",
        {
          photo,
          token,
        }
      );
    } catch (err) {
      console.log(err);
    }
    // axios
    //   .put("http://localhost:5000/api/infoupdate/changeAvatar", {
    //     photo,
    //     token,
    //   })
    //   .then((res) => {
    //     setPhoto("");
    //   })
    //   .catch((err) => console.log(err));
  };

  const updateInfo = async (e) => {
    e.preventDefault();
    if (number || adress) {
      try {
        const { data } = await axios.put(
          "https://aversi.herokuapp.com/api/infoupdate/changeInfo",
          { adress, number, token }
        );
        console.log(data);
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

      <p> მომხმარებლის სახელი : {auth?.user?.username}</p>
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
      </form>
    </div>
  );
}

export default ProfilePageInfo;
