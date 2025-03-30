/**
 *  Test inputs:
 *
 *  console.log(ArrayChallenge(["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"]))
 *  console.log(ArrayChallenge(["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]))
 *  console.log(ArrayChallenge(["12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"]))
 *
 */

/**
 * @param {string[]} strArr
 * @return {string}
 */

function ArrayChallenge(strArr) {
  let timeInMinutes = [];

  for (let str of strArr) {
    let start = str.substring(0, 7);
    let end = str.substring(8);

    timeInMinutes.push([timeToMinutes(start), timeToMinutes(end)]);
  }

  timeInMinutes.sort((a, b) => { return a[0] - b[0]; });

  let longestFreeTime = 0;

  for (let i = 0; i < timeInMinutes.length - 1; i++) {
    let endCurrentEvent = timeInMinutes[i][1];
    let startNextEvent = timeInMinutes[i + 1][0];

    let freeTime = startNextEvent - endCurrentEvent;

    longestFreeTime = Math.max(longestFreeTime, freeTime);
  }

  let freeTimeInClockTime = minutesToClockTime(longestFreeTime);

  return applyChallengeToken(freeTimeInClockTime);
}

/**
 * @param {string} str
 * @return {number}
 */

function timeToMinutes(str) {
  let hour = parseInt(str.substring(0, 2));
  let minute = parseInt(str.substring(3, 5));

  if (str[5] == "P" && hour != 12) {
    hour += 12;
  }

  return hour * 60 + minute;
}

/**
 * @param {number} minutes
 * @return {string}
 */

function minutesToClockTime(minutes) {
  let hour = parseInt(minutes / 60);
  let minute = minutes % 60;

  return (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute);
}

/**
 * @param {string} str
 * @return {string}
 */

function applyChallengeToken(str) {
  str = str.split("");

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }

  let token = "2esjpv4t85".split("");

  for (let i = 0, j = token.length - 1; i < j; i++, j--) {
    let temp = token[i];
    token[i] = token[j];
    token[j] = temp;
  }

  return str.join("") + ":" + token.join("");
}