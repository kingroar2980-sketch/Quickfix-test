import { useState } from "react";

const API_URL = "http://localhost:5000";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  async function login() {
    setMessage("");
    setUser(null);

    const res = await fetch(API_URL + "/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token && data.user) {
      setUser(data.user);
      setMessage("Login successful");
    } else {
      setMessage(data.message || "Login failed");
    }
  }

  return (
    <div>
      <h1>QuickFix Demo</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={login}>Login</button>

      {message && <p>{message}</p>}
      {user && <p>Welcome, {user.name}</p>}
    </div>
  );
}


