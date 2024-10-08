import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
// make sure to install emailjs-com
// npm install emailjs-com

const WelcomePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const goToHomePage = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the email
    emailjs
      .send(
        "service_k4omy0o",
        "template_v2erprl",
        {
          username: formData.username,
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          to_email: "travistandres@yahoo.com",
        },
        "v5XpfKovodgpnJ1hJ"
      )
      .then((response) => {
        alert("Email sent successfully!");
        setFormData({
          username: "",
          email: "",
          firstName: "",
          lastName: "",
        });
      })
      .catch((error) => {
        alert("There was an error sending the email. Please try again.");
        console.error("Email sending error:", error);
      });
  };

  return (
    <div>
      <h1>Welcome to HackerCon</h1>
      <p>Welcome SuperHacker You Are Inz</p>
      <button onClick={goToHomePage}>HOME</button>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            USERNAME:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            EMAIL:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            FIRSTNAME:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            LASTNAME:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WelcomePage;
