import React from "react";
import "../styles/Geng.css";

const ProfileCard = ({ user, onAddFriend }) => {
  return (
    <div className="profile-card">
      <img src={user.image} alt={user.name} className="profile-img" />
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
      <button onClick={() => onAddFriend(user.id)}>Tambah Teman</button>
    </div>
  );
};

export default ProfileCard;
