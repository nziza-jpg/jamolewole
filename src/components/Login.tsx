import React, { useState } from "react";
import "./Login.css";
import Code from "../assets/Code.jpeg";

type LoginProps = {
  onSuccess: () => void;
};

const PASSWORD = "01272024";

export default function Login({ onSuccess }: LoginProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      setError("");
      onSuccess();
    } else {
      setError("Try Again Boss Read My Mind");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome my handsome boyfriend</h2>

        <input
          aria-label="password"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="MMDDYYYY"
        />
        <p>Hint: "feel like you're in a movie"</p>
        <p>PS: scan the code before opening the website and also you might need to zoom out if its too upclose the responsiveness is a bit fucked.</p>
        <button type="submit">Enter</button>
        {error && <div className="error">{error}</div>}
      </form>
      <div>
        <img src={Code} alt="code" className="login-image" />
      </div>
    </div>
  );
}
