import React from "react";
import "./ProfileAvatar.scss";

const ProfileAvatar = () => {
  return (
    <div className="profile__avatar">
      <img
        className="profile__image"
        src="images/user-avatar.svg"
        alt="UserAvatar"
      />
      <img className="profile__sctiker" src="/images/change-avatar.svg" alt="change-avatar" />
    </div>
  );
};

export default ProfileAvatar;
