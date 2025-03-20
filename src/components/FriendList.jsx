import React from "react";
import "../styles/Geng.css";

const FriendList = ({ friends }) => {
  return (
    <div className="friend-list">
      <h3>Daftar Teman</h3>
      <ul>
        {friends.length > 0 ? (
          friends.map((friend) => <li key={friend.id}>{friend.name}</li>)
        ) : (
          <p>Belum ada teman</p>
        )}
      </ul>
    </div>
  );
};

export default FriendList;
