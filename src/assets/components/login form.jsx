import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [memberId, setMemberId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(memberId);
    setMemberId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Membership ID"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
