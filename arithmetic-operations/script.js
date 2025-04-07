/**
 * @param {string} str
 * @return {string}
 */
function StringChallenge(str) {
  const wordToChar = {
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
    "plus": "+",
    "minus": "-"
  };

  let expression = ["+"];
  let number = "";

  for (let i = 0, k = 0; i <= str.length; i++) {
    let word = str.substring(k, i);

    if (word in wordToChar) {
      k = i;

      if (word != "plus" && word != "minus") {
        number += wordToChar[word];
        continue;
      }

      expression.push(number);
      expression.push(wordToChar[word]);
      number = "";
    }
  }

  expression.push(number);

  let result = 0;

  for (let i = 0; i < expression.length; i += 2) {
    let number = parseInt(expression[i + 1]);

    if (expression[i] == "+") {
      result += number;
    } else {
      result -= number;
    }
  }

  const charToWord = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "-": "negative"
  };

  let resultDigits = "";

  for (const caractere of result.toString().split("")) {
    resultDigits += charToWord[caractere];
  }

  return resultDigits;
}