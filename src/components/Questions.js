import React from "react";
import Answers from "./Answers";

export default function Questions(props) {
  function removeCharacters(question) {
    return question
      .replace(/(&quot\;)/g, '"')
      .replace(/(&rsquo\;)/g, '"')
      .replace(/(&#039\;)/g, "'")
      .replace(/(&amp\;)/g, '"');
  }

  const answerElements = props.allAnswers.map((element, i) => (
    <Answers
      key={props.id + i}
      whichAnswerIsSelect={props.whichAnswerIsSelect}
      answer={element}
      removeCharacters={removeCharacters}
      isSelect={props.isSelect}
      correctAnswer={props.correctAnswer}
      checkResult={props.checkResult}
    />
  ));
  return (
    <div className="container">
      <div className="question-elements">
        <h4 className="question-elements__question">
          {removeCharacters(props.question)}
        </h4>
        <div className="question-elements__answers">{answerElements}</div>
        <hr />
      </div>
    </div>
  );
}
