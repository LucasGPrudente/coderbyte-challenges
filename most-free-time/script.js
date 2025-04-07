/**
 * @param {string[]} strArr
 * @return {string}
 */
function MostFreeTime(strArr) {
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

  let hour = Math.floor(longestFreeTime / 60);
  let minute = longestFreeTime % 60;

  let result = (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute);

  return result;
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