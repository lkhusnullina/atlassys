import React from "react";
import "./Profile.scss";
import ProfileTabs from "./ProfileTabs/ProfileTabs";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileForm from "./ProfileForm/ProfileForm";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileTabs/>
      <div className="profile__main">
        <ProfileAvatar/>
        <ProfileForm/>
      </div>
    </div>
  );
};

export default Profile;