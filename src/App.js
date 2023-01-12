import "./styles/App.css";
import React from "react";
import Questions from "./components/Questions";
import changeData from "./changeData";
import Intro from "./components/Intro";

export default function App() {
  const [questionsData, setQuestionsData] = React.useState([]);
  const [startGame, setStartGame] = React.useState(false);
  const [checkResult, setCheckResult] = React.useState(false);
  const [points, setPoints] = React.useState(0);
  const [resetQuestions, setResetQuestions] = React.useState(false);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        const newData = changeData(data.results);
        setQuestionsData(newData);
      });
  }, [resetQuestions]);
  function start() {
    setStartGame(true);
    console.log(questionsData);
  }
  function whichAnswerIsSelect(answer) {
    if (!checkResult) {
      setQuestionsData((prev) =>
        prev.map((data) => {
          return data.allAnswers.includes(answer)
            ? { ...data, isSelect: answer }
            : data;
        })
      );
    }
  }
  function restartGame() {
    setResetQuestions(!resetQuestions);
    setPoints(0);
    setCheckResult(false);
  }
  function checkGame() {
    setCheckResult(true);
    const lookForNumberOfCorrect = questionsData.filter((element) => {
      return element.isSelect === element.correctAnswer;
    });
    setPoints(lookForNumberOfCorrect.length);
  }
  const questionElements = questionsData.map((element) => (
    <Questions
      whichAnswerIsSelect={whichAnswerIsSelect}
      question={element.question}
      allAnswers={element.allAnswers}
      correctAnswer={element.correctAnswer}
      isSelect={element.isSelect}
      id={element.id}
      key={element.id}
      checkResult={checkResult}
    />
  ));
  return (
    <div className="App">
      {!startGame ? (
        <Intro start={start} startGame={startGame} />
      ) : (
        <>
          {questionElements}
          <div className="buttons">
            {!checkResult ? (
              <button className="buttons__btn-check btn" onClick={checkGame}>
                Check answers
              </button>
            ) : (
              <>
                <h4 className="buttons__result ">
                  You scored {points}/5 correct answers
                </h4>
                <button
                  className="buttons__btn-again btn"
                  onClick={restartGame}
                >
                  Play again
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
