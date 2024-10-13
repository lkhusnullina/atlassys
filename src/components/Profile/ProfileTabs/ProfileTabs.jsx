import React from 'react';
import './ProfileTabs.scss'; // Импортируем стили

const ProfileTabs = () => {
  return (
    <div className="profile-tabs">
      <button className="profile-tabs__tab profile-tabs__tab--active">Edit Profile</button>
      <button className="profile-tabs__tab">Preferences</button>
      <button className="profile-tabs__tab">Security</button>
    </div>
  );
};

export default ProfileTabs;