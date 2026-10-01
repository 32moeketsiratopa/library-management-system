import React, { useState, useEffect } from "react";
import { getData, saveData } from "../utils/localStorage";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", membershipId: "", role: "member" });

  useEffect(() => {
    setUsers(getData("users"));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addUser = (e) => {
    e.preventDefault();
    const updated = [...users, form];
    saveData("users", updated);
    setUsers(updated);
    setForm({ name: "", membershipId: "", role: "member" });
  };

  const deleteUser = (index) => {
    const updated = users.filter((_, i) => i !== index);
    saveData("users", updated);
    setUsers(updated);
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={addUser}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="membershipId" placeholder="Membership ID" value={form.membershipId} onChange={handleChange} required />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map((u, i) => (
          <li key={i}>
