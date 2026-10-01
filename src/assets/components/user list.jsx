import React from "react";

function UserList({ users, onDelete }) {
  return (
    <ul>
      {users.map((u, i) => (
        <li key={i}>
          {u.name} - {u.membershipId} ({u.role})
          <button onClick={() => onDelete(i)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
