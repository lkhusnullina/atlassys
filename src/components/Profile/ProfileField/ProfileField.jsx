import React from 'react';
import './ProfileField.scss';

const ProfileField = ({ label, value }) => {
  return (
    <div className="profile-field">
      <label className="profile-field__label">{label}</label>
      <input 
        type="text" 
        className="profile-field__input" 
        placeholder={value}
        readOnly 
      />
    </div>
  );
};

export default ProfileField;