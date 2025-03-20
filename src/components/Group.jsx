import React, { useState } from "react";
import "../styles/Geng.css";

const Group = ({ groups, onCreateGroup }) => {
  const [groupName, setGroupName] = useState("");

  const createGroup = () => {
    if (groupName.trim()) {
      onCreateGroup(groupName);
      setGroupName("");
    }
  };

  return (
    <div className="group-container">
      <h3>Grup Komunitas</h3>
      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="Nama Grup Baru"
      />
      <button onClick={createGroup}>Buat Grup</button>

      <ul>
        {groups.map((group, index) => (
          <li key={index}>{group}</li>
        ))}
      </ul>
    </div>
  );
};

export default Group;
