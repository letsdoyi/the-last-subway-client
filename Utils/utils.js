export { minuteToStringHourMinite, minuteToMiliseconds, secondsToStringHourMiniteSecond };

const minuteToStringHourMinite = min => {
  if (min > 60) {
    const quotient = parseInt(min / 60);
    const rest = min - quotient * 60;
    if (quotient === 1) {
      return `${parseInt(min / 60)} hour ${rest} mins`;
    }
    return `${parseInt(min / 60)} hours ${rest} mins`;
  } else if (min === 60) {
    return `1 hour`;
  } else {
    return `${min} mins`;
  }
};

const secondsToStringHourMiniteSecond = sec => {
  let result = '';
  let quotient = parseInt(sec / (60 * 60));
  let rest = sec - quotient * 60 * 60;
  quotientString = toTwoDigitString(quotient);
  result += `${quotientString}:`;
  quotient = parseInt(rest / 60);
  rest = rest - quotient * 60;
  quotientString = toTwoDigitString(quotient);
  restString = toTwoDigitString(rest);
  result += `${quotientString}:`;
  result += `${restString}`;
  return result;
};

const toTwoDigitString = num => {
  let result = '';
  if (num < 10) {
    return (result += `0${num}`);
  } else {
    return (result += `${num}`);
  }
};

const minuteToMiliseconds = min => {
  min = Number(min);
  console.log('min typeof', typeof min);
  console.log(min * 60 * 1000);
  return min * 60 * 1000;
};
