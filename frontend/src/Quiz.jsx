import React, { useState } from "react";
import { DropdownMenu } from './DropdownMenu';
import Logo from './logo.png';


export const Quiz = () => {
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateScore();
  };

  const handleChange = (event, index) => {
    const { value } = event.target;
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = value;
      return updatedAnswers;
    });
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    const correctOptions = [
      "retirement",
      "pre-tax",
      "pre-tax",
      "contribution",
      "employer",
      "automatic",
      "tax-deferred",
      "withdrawal",
      "investment",
      "after-tax",
    ];

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] && answers[i].toLowerCase() === correctOptions[i]) {
        correctAnswers++;
      }
    }

    const totalQuestions = correctOptions.length;
    const calculatedScore = (correctAnswers / totalQuestions) * 100;
    setScore(calculatedScore);
  };

  const isAnswerCorrect = (index) => {
    if (answers[index] && answers[index].toLowerCase() === correctOptions[index]) {
      return true;
    }
    return false;
  };

  const correctOptions = [
    "retirement",
    "pre-tax",
    "pre-tax",
    "contribution",
    "employer",
    "automatic",
    "tax-deferred",
    "withdrawal",
    "investment",
    "after-tax",
  ];

  // Define the array of questions
  const questions = [
    "A 401(k) is a type of __________ retirement savings account.",
    "The contributions made to a traditional 401(k) are typically __________.",
    "One advantage of a 401(k) is the ability to contribute __________ dollars on a pre-tax basis.",
    "401(k) contributions are subject to __________ limits set by the IRS.",
    "Many employers offer __________ matching contributions to employees' 401(k) plans.",
    "Contributions to a 401(k) are made through __________ deductions from an employee's paycheck.",
    "The earnings on investments within a 401(k) grow __________ until withdrawn.",
    "401(k) withdrawals before age 59 1/2 may be subject to an early __________ penalty.",
    "Some 401(k) plans offer a __________ option, allowing employees to choose how their contributions are invested.",
    "A Roth 401(k) allows for __________ contributions with tax-free withdrawals in retirement.",
  ];

  return (
    <div className="quiz-div">
    <DropdownMenu />
    <img src={Logo} className="logo"/>
    <div className="quiz-container">
      <h1>Quiz Page</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div className="question" key={index}>
            <label htmlFor={`question${index}`}>
              {`${index + 1}. ${question}`}
            </label>
            <input
              type="text"
              id={`question${index}`}
              name={`question${index}`}
              className={isAnswerCorrect(index) ? "correct" : "incorrect"}
              onChange={(event) => handleChange(event, index)}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {score !== null && (
        <div className="score">
          Your score: {score.toFixed(2)}%
        </div>
      )}
    </div>
    </div>
  );
};

export default Quiz;
