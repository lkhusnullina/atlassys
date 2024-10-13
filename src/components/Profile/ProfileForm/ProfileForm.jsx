import React from 'react';
import './ProfileForm.scss'; 
import ProfileField from '../ProfileField/ProfileField';

const ProfileForm = () => {
  return (
    <div className="profile-form__block">
        <form className="profile-form">
        <ProfileField label="Your Name" value="Charlene Reed" />
        <ProfileField label="User Name" value="Charlene Reed" />
        <ProfileField label="Email" value="charlenereed@gmail.com" />
        <ProfileField label="Password" value="**********" />
        <ProfileField label="Date of Birth" value="25 January 1990" />
        <ProfileField label="Present Address" value="San Jose, California, USA" />
        <ProfileField label="Permanent Address" value="San Jose, California, USA" />
        <ProfileField label="City" value="San Jose" />
        <ProfileField label="Postal Code" value="45962" />
        <ProfileField label="Country" value="USA" />
        </form>
        <button type="submit" className="profile-form__save-button">Save</button>
    </div>
  );
};

export default ProfileForm;