import React, { useState } from "react";
export default function SignInAlert() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="alert-overlay">
      <div className="custom-alert">
        <button
          className="close-button"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          ×
        </button>
        <h2>Sign in</h2>
        <p>Sign in to continue using this feature.</p>
        <div className="sign-in-buttons">
          <button onClick={() => console.log("Sign in clicked")}>
            Sign In
          </button>
          <button onClick={() => console.log("Create account clicked")}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
.alert-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
  z-index: 9999;
}
.custom-alert {
  position: relative;
  width: min(420px, 90%);
  padding: 28px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}
.custom-alert h2 {
  margin-top: 0;
}
.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
  border: 0;
  background: transparent;
  font-size: 28px;
  cursor: pointer;
}
.sign-in-buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.sign-in-buttons button {
  flex: 1;
  padding: 12px 16px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}
