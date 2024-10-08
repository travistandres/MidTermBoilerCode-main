import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const hardcodedUsername = "user123"; // Replace with your hardcoded username
  const hardcodedPassword = "pass123"; // Replace with your hardcoded password

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check against hardcoded credentials
    if (username === hardcodedUsername && password === hardcodedPassword) {
      navigate("/landing"); // Navigate to the landing page on successful login
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div>
      <h1>Login Here</h1>
      <p>This is the Login Page.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
        </div>
        <button type="submit">Take Qualifier Quiz</button>
      </form>
    </div>
  );
};

export default LoginPage;
