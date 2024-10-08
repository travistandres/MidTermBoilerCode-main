import { useNavigate } from "react-router-dom";
import { useState } from "react";

const QuizPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
  const [error, setError] = useState("");

  const correctAnswers = {
    question1: "react",
    question2: "front-end developer",
    question3: "css",
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (validateAnswers()) {
      const score = checkAnswers();
      if (score === 3) {
        navigate("/welcome"); // Navigate to the Welcome page
      } else {
        alert("Some answers are incorrect. Please review your answers.");
      }
    } else {
      setError("Please answer all questions before submitting.");
    }
  };

  const validateAnswers = () => {
    return Object.values(answers).every((answer) => answer.trim() !== "");
  };

  const checkAnswers = () => {
    let score = 0;
    Object.keys(answers).forEach((question) => {
      if (
        answers[question].trim().toLowerCase() ===
        correctAnswers[question].toLowerCase()
      ) {
        score += 1;
      }
    });
    return score;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Take Quiz to Qualify</h1>
      <p>Welcome to the qualifier quiz</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            1. What is the library for web and native user interfaces?
          </label>
          <input
            type="text"
            name="question1"
            value={answers.question1}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            2. Who is a type of web developer who focuses on the visual and
            interactive aspects of a website or web application?
          </label>
          <input
            type="text"
            name="question2"
            value={answers.question2}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            3. What is a stylesheet language used to control the presentation
            and layout of web pages?
          </label>
          <input
            type="text"
            name="question3"
            value={answers.question3}
            onChange={handleChange}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default QuizPage;
