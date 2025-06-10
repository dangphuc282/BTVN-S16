function processConfirm(answer) {
  let result = '';
  if (answer === true) {
      result = "Excellent. We'll play a nice game of chess.";
  } else {
      result = "Maybe later then.";
  }
  return result;
}

let userAnswer = confirm('Bạn có muốn chơi cờ không?');
console.log(processConfirm(userAnswer));


