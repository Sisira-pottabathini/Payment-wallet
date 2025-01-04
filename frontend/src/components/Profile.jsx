// eslint-disable-next-line no-unused-vars
import React from "react";

const Profile = () => {
  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: Sisira</p>
      <p>Email: sisira@gmail.com</p>
      <button onClick={() => alert("Change Password Feature Coming Soon!")}>
        Change Password
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
