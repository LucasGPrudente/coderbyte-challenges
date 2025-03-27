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
  let clockTimeInMinutes = [];

  for (let str of strArr) {
    let start = str.substring(0, 7);
    let end = str.substring(8);

    clockTimeInMinutes.push([clockTimeToMinutes(start), clockTimeToMinutes(end)]);
  }

  clockTimeInMinutes.sort((a, b) => { return a[0] - b[0]; });

  let longestFreeTime = 0;

  for (let i = 0; i < clockTimeInMinutes.length - 1; i++) {
    let endOfCurrentEvent = clockTimeInMinutes[i][1];
    let startOfNextEvent = clockTimeInMinutes[i + 1][0];

    let freeTime = startOfNextEvent - endOfCurrentEvent;

    longestFreeTime = Math.max(longestFreeTime, freeTime);
  }

  return minutesToClockTime(longestFreeTime);
}

/**
 * @param {string} str
 * @return {number}
 */

function clockTimeToMinutes(str) {
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