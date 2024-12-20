
import React from 'react';
import '../style/ProfileNotFound.css';

const ProfileNotFound = ({ onRetry }) => {
  return (
    <div className="profile-not-found">
      <h2>Profile Not Found</h2>
      <p>Sorry, we couldn’t find the user profile.</p>
      <button className="retry-button" onClick={onRetry}>Retry</button>
    </div>
  );
};

export default ProfileNotFound;