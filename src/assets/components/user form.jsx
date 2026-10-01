import React, { useState } from "react";

function UserForm({ onAddUser }) {
  const [form, setForm] = useState({ name: "", membershipId: "", role: "member" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(form);
    setForm({ name: "", membershipId: "", role: "member" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="membershipId" placeholder="Membership ID" value={form.membershipId} onChange={handleChange} required />
      <select name="role" value={form.role} onChange={handleChange}>
        <option value="member">Member</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
