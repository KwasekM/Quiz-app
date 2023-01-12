import React from "react";

export default function Answers(props) {
  let styles = {};
  function customizeStyles() {
    if (props.checkResult && props.answer === props.correctAnswer) {
      styles = {
        backgroundColor: "#94D7A2",
      };
    } else if (
      props.checkResult &&
      props.answer === props.isSelect &&
      props.answer !== props.correctAnswer
    ) {
      styles = {
        backgroundColor: "#F8BCBC",
      };
    } else if (props.answer === props.isSelect) {
      styles = {
        backgroundColor: "#D6DBF5",
      };
    } else {
      styles = {
        backgroundColor: " #F5F7FB",
      };
    }
    return styles;
  }
  customizeStyles();

  return (
    <button
      style={styles}
      onClick={() => {
        props.whichAnswerIsSelect(props.answer);
      }}
      className="question-elements__answer"
    >
      {props.removeCharacters(props.answer)}
    </button>
  );
}
