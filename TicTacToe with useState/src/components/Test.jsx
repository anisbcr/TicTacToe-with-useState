
import React, { useState } from "react";
import "../components/Test.css";
const quiz = [
  {
    question: "Quel est le plus grand océan du monde ?",
    options: ["Atlantique", "Pacifique", "Indien", "Arctique"],
    answer: "Pacifique",
  },
  {
    question: "Quelle est la formule chimique de l'eau ?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O",
  },
  {
    question: "Qui a écrit 'Les Misérables' ?",
    options: ["Victor Hugo", "Marcel Proust", "Albert Camus", "Emile Zola"],
    answer: "Victor Hugo",
  },
  {
    question:
      "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
    options: ["1969", "1959", "1979", "1989"],
    answer: "1969",
  },
  {
    question: "Quelle est la capitale de la France ?",
    options: ["Paris", "Londres", "Berlin", "Madrid"],
    answer: "Paris",
  },
];
function Test() {
  const [indexQuiz, setIndexQuiz] = useState(0);
  const [options, setOptions] = useState("");
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    if (option === quiz[indexQuiz].answer) {
      setScore(score + 1);
    }
    if (indexQuiz < quiz.length - 1) {
      setIndexQuiz(indexQuiz + 1);
      setOptions("");
    } else {
      setFinished(true);
    }
  };
  const startedFk = () => {
    setStarted(true);
  };
  return (
    <div className="App">   
      {!finished ? <h1>Quiz</h1> : ""}
      {!started ? (
        <button className="start-button" onClick={startedFk}>
          commencer la Quiz
        </button>
      ) : (
        <>
          {finished ? (
            <div className="result">
              <h1>Quiz</h1>
              <p>
                votre score est {score} sur {quiz.length}
              </p>
            </div>
          ) : (
            <div className="question-container">
              <p>{quiz[indexQuiz].question}</p>
              {quiz[indexQuiz].options.map((option, index) => (
                <button
                  key={index}
                  className="option-button"
                  onClick={() => handleClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Test;
