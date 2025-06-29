import React from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const questions = [
  {
    question: "Apa ibu kota Indonesia?",
    options: ["Bandung", "Jakarta", "Surabaya", "Medan"],
    answer: "Jakarta",
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
];

export default function QuizPage() {
  const [current, setCurrent] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  function handleAnswer(option: string) {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="p-4 bg-gray-700">
      {showScore ? (
        <h1>Skor Kamu: {score} / {questions.length}</h1>
      ) : (
        <div>
          <h2>{questions[current].question}</h2>
          {questions[current].options.map((opt) => (
            <button key={opt} onClick={() => handleAnswer(opt)} className="block p-2 my-1 bg-blue-200 rounded">
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 
