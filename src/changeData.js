import { nanoid } from "nanoid";

export default function changeData(data) {
  let changedData = new Array(data.length);

  for (let i = 0; i < data.length; i++) {
    let incorrectAnswers = [];
    for (let j = 0; j < data[i].incorrect_answers.length; j++) {
      incorrectAnswers.push(data[i].incorrect_answers[j]);
    }
    changedData[i] = {
      question: data[i].question,
      correctAnswer: data[i].correct_answer,
      allAnswers: mixAnswers([data[i].correct_answer, ...incorrectAnswers]),
      id: nanoid(),
      isSelect: false,
    };
  }
  return changedData;
}
function mixAnswers(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
