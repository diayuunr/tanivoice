import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Chat from "../components/Chat";
import Group from "../components/Group";
import FriendList from "../components/FriendList";
import "../styles/Geng.css";

const users = [
  { id: 1, name: "Budi", bio: "Petani Organik", image: "/images/budi.png" },
  { id: 2, name: "Siti", bio: "Hidroponik Expert", image: "/images/siti.png" },
  { id: 3, name: "Andi", bio: "Pecinta Cabe", image: "/images/andi.png" },
];

function Community() {
  const [friends, setFriends] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const addFriend = (id) => {
    const newFriend = users.find((user) => user.id === id);
    if (!friends.find((friend) => friend.id === id)) {
      setFriends([...friends, newFriend]);
    }
  };

  const createGroup = (name) => {
    setGroups([...groups, name]);
  };

  const startChat = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="community-container">
      <h1>TaniGENGS</h1>
      <p>Berkenalan dan bangun relasi dengan petani dari seluruh Indonesia.</p>

      <div className="profile-section">
        {users.map((user) => (
          <ProfileCard key={user.id} user={user} onAddFriend={addFriend} onSelectUser={startChat} />
        ))}
      </div>

      <FriendList friends={friends} onSelectUser={startChat} />
      <Group groups={groups} onCreateGroup={createGroup} />

      {selectedUser && <Chat user={selectedUser} />}
    </div>
  );
}

export default Community;
