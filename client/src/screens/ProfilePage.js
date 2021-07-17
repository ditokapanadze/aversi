import React, { useEffect } from "react";
import ProfilePageHeader from "../components/ProfilePageHeader";
import ProfilePageInfo from "../components/ProfilePageInfo";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/auth";
import axios from "axios";
function ProfilePage() {
  return (
    <>
      <ProfilePageHeader />
      <ProfilePageInfo />
    </>
  );
}

export default ProfilePage;
