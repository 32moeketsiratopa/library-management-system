import React, { useState, useEffect } from "react";
import { getData, saveData } from "../utils/localStorage";

function UserManagement() {
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    membershipId: "",
    role: "member",
  });

  useEffect(() => {
    setUsers(getData("users"));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addUser = (e) => {
    e.preventDefault();

    const updatedUsers = [...users, form];

    saveData("users", updatedUsers);
    setUsers(updatedUsers);

    setForm({
      name: "",
      membershipId: "",
      role: "member",
    });
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);

    saveData("users", updatedUsers);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2 className="page-title">User Management</h2>

      <div className="user-page-grid">

        {/* Add User */}
        <div className="card">
          <h3>Add New User</h3>

          <p className="form-description">
            Register a new library member or administrator.
          </p>

          <form onSubmit={addUser} className="user-form">

            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label>Membership ID</label>
            <input
              type="text"
              name="membershipId"
              placeholder="Enter membership ID"
              value={form.membershipId}
              onChange={handleChange}
              required
            />

            <label>Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>

            <button type="submit">
              Add User
            </button>

          </form>
        </div>

        {/* User List */}
        <div className="card">
          <h3>Registered Users</h3>

          {users.length === 0 ? (
            <p>No users have been registered yet.</p>
          ) : (
            <div className="table-container">
              <table>

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Membership ID</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>

                      <td>{user.name}</td>

                      <td>{user.membershipId}</td>

                      <td>
                        <span
                          className={
                            user.role === "admin"
                              ? "role-admin"
                              : "role-member"
                          }
                        >
                          {user.role}
                        </span>
                      </td>

                      <td>
                        <button
                          className="delete-button"
                          onClick={() => deleteUser(index)}
                        >
                          Delete
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default UserManagement;