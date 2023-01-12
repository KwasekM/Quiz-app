import React from "react";
export default function Intro(props) {
  return (
    <div className="start-game">
      <h2 className="start-game__title">Quiz</h2>
      <p className="start-game__description">
        Welcome to the quiz game! In this game, you will be presented with a
        series of questions on a various topics.
      </p>
      <button className="start-game__btn btn" onClick={props.start}>
        Start quiz
      </button>
    </div>
  );
}
