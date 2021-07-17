import React, { useEffect } from "react";
import ProfilePageHeader from "../components/ProfilePageHeader";
import ProfilePageInfo from "../components/ProfilePageInfo";
import { useHistory } from "react-router-dom";

function ProfilePage() {
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }
  }, []);

  return (
    <>
      <ProfilePageHeader />
      <ProfilePageInfo />
    </>
  );
}

export default ProfilePage;
