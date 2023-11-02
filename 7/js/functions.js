
const compareString = (comparedString, maxLength) => comparedString.Length <= maxLength;
compareString('aaaaa', 1);

const checkPalindrom = (string) => {
  string = string.replaceAll(' ','').toLowerCase();
  return string === string.split('').reverse().join('');
};

checkPalindrom('топот');
checkPalindrom('ДовОд');

const findNumber = (result) => {
  result.replace(/\D+/g, '');
  return parseInt(result, 10);
};

findNumber('2023 год');
findNumber('ECMAScript 2022');
findNumber('1 кефир, 0.5 батона');
findNumber('агент 007');
findNumber('а я томат');

function EditTime(time) {
  let [hour, minute] = time.split(':');
  hour = hour.padStart(2, '0');
  minute = minute.padStart(2, '0');
  return `${hour}:${minute}`;
}

function CheckWorkingHours(startTime, endTime, meetingStartTime, duration) {
  const meetingEndHour = Math.floor(duration / 60);
  const meetingEndMinute = duration % 60;

  startTime = EditTime(startTime);
  endTime = EditTime(endTime);
  meetingStartTime = EditTime(meetingStartTime);

  let [startHour, startMinute] = startTime.split(':');
  let [endHour, endMinute] = endTime.split(':');
  let [meetingStartHour, meetingStartMinute] = meetingStartTime.split(':');

  startHour = parseInt(startHour,10);
  startMinute = parseInt(startMinute,10);
  endHour = parseInt(endHour,10);
  endMinute = parseInt(endMinute,10);
  meetingStartHour = parseInt(meetingStartHour,10);
  meetingStartMinute = parseInt(meetingStartMinute,10);

  const durationMinute = meetingStartMinute + meetingEndMinute;
  const durationHour = meetingStartHour + meetingEndHour;

  if (meetingStartHour < startHour || (meetingStartHour === startHour && meetingStartMinute < startMinute)) {
    return false;
  }
  else if (meetingStartHour > endHour || (meetingStartHour === endHour &&  durationMinute > endMinute)) {
    return false;
  }
  else if (meetingStartHour + meetingEndHour > endHour || ( durationHour === endHour && durationMinute > endMinute)) {
    return false;
  }
  return true;
}

CheckWorkingHours('08:00', '17:30', '14:00', 90); // true
CheckWorkingHours('8:0', '10:0', '8:0', 120);     // true
CheckWorkingHours('08:00', '14:30', '14:00', 90); // false
CheckWorkingHours('14:00', '17:30', '08:0', 90);  // false
CheckWorkingHours('8:00', '17:30', '08:00', 900); // false
