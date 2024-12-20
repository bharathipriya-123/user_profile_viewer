import React from 'react';
import '../style/UserProfile.css';

const Profile = ({ name, avatar, bio }) => {
  return (
    <div className="profile">
      <img src={avatar} alt="User Avatar" className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default Profile;