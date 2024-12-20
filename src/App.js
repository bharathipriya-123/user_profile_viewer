
import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import ProfileNotFound from './components/ProfileNotFound';
import './App.css';


const App = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = () => {
    setLoading(true);
    setTimeout(() => {
      const data = Math.random() > 0.5 ? { name: 'Jinmiran', avatar: 'https://i.pinimg.com/originals/07/2d/2e/072d2e5fd76d4ec1269e50b091eb3ca3.jpg', bio: 'youtuber' } : null;
      setUserData(data);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  return (
    <div className="app">
      {userData ? (
        <Profile name={userData.name} avatar={userData.avatar} bio={userData.bio} />
      ) : (
        <ProfileNotFound onRetry={fetchUserData} />
      )}
    </div>
  );
};

export default App;
