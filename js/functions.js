
const compareString = (comparedString, maxLength) => comparedString.Length <= maxLength;
compareString('aaaaa', 1);

const checkPalindrom = (string) => {
  string = string.replaceAll(' ','').toLowerCase();
  return string === string.split('').reverse().join('');
}

checkPalindrom("топот");
checkPalindrom("ДовОд");

const findNumber = (result) => {
  result.replace(/\D+/g, '');
  return parseInt(result, 10);
};

findNumber('2023 год');
findNumber('ECMAScript 2022');
findNumber('1 кефир, 0.5 батона');
findNumber('агент 007');
findNumber('а я томат');
