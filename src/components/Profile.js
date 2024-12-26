
import React from 'react';
import { useState } from 'react';
import '../style/UserProfile.css';

const Profile = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUserData = (id) => {
    try {
      setLoading(true);
      //########## Syntax########
          // window.localStorage
          // or just:
          // localStorage

          // **********Save Data to Local Storage***********
          // localStorage.setItem(key, value);

          // **********Read Data from Local Storage************
          // let lastname = localStorage.getItem(key);

          // &&&&&&&&&&&Remove Data from Local Storage&&&&&&&&
          // localStorage.removeItem(key);

          // &&&&&&&&&&&Remove All (Clear Local Storage)&&&&&&&&&&&
          // localStorage.clear();
      const storedData = JSON.parse(localStorage.getItem('userData')) || [];
      const user = storedData.find((user) => user.id === parseInt(id, 10));

      if (user) {
        setUserData(user);
        setError(false);
      } else {
        setUserData(null);
        setError(true);
      }
    } catch (err) {
      console.error('Error parsing localStorage data:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleButton = () => {
    const newUserData = [
      {
        id: 1,
        name: "zara",
        email: "zara@gmail.com",
        phoneNo: 123456789,
        avatar: "https://st2.depositphotos.com/3369547/11870/v/450/depositphotos_118708668-stock-illustration-woman-female-avatar-person-people.jpg",
        location: "trichy",
        bio: "student at anna university",
       
      },
      {
        id: 2,
        name: "nikhil",
        email: "nikhil@gmail.com",
        phoneNo: 9677878147,
        avatar: "https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg",
        location: "bangalore",
        bio: "employeee at private sector",
        
      },
      {
        id: 3,
        name: "jassy",
        email: "jassy@gmail.com",
        phoneNo: 784578915,
        avatar: "https://cdn.pixabay.com/photo/2024/10/04/15/22/ai-generated-9096766_1280.jpg",
        location: "dubai",
        bio: "banking professional",
        
      },
      {
        id: 4,
        name: "bharathi",
        email: "bharathi@gmail.com",
        phoneNo: 9865356697,
        avatar: "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png",
        location: "chennai",
        bio: "student at anna university",
        
      },
      {
        id: 5,
        name: "janani",
        email: "janani@gmail.com",
        phoneNo: 4578912556,
        avatar: "https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg",
        location: "madurai",
        bio: "intern",
        
      },
    ];

    // js function JSON.stringify(userData) is used to convert it into a string
    localStorage.setItem('userData', JSON.stringify(newUserData));
    fetchUserData(userId);

      setUserData(null);
      setError(false);
      setUserId('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData(userId);
  };

  return (
    <div>
      <div className='form'>
      <form onSubmit={handleSubmit} className="userId">
        <label htmlFor="userId">Enter User ID:</label>
        <input
          type="number"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
        />
        <button type="submit" className='searchbtn'>Search</button>
      </form>
      </div>

      {loading ? (
        <div className="spinner">Loading...</div>
      ) : error ? (
        <div className="profileNF">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt ='profileN'className='image1'/>
          <h1>Profile Not Found</h1>
          <h3>The profile you are looking for does not exist</h3>
          <button onClick={handleButton} className="retry">Retry</button>
        </div>
      ) : (
        userData && (
          <div className="userDetails">
            <h2>User Profile Viewer</h2>
            <img src={userData.avatar} className="avatar" />
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <p>{userData.phoneNo}</p>
            <p>{userData.location}</p>
            <p>{userData.bio}</p>
          </div>
        //   <div className="userDetails">
        //   <h2>User Profile Viewer</h2>
        //   <img src={userData.avatar} className="avatar" />
        //   <p><b>NAME:</b>{userData.name}</p>
        //   <p><b>EMAIL:</b>{userData.email}</p>
        //   <p><b>PHONENO:</b>{userData.phoneNo}</p>
        //   <p><b>LOCATION:</b>{userData.location}</p>
        //   <p><b>BIO:</b>{userData.bio}</p>
        // </div>
        )
      )}
    </div>
  );
};

export default Profile; 
