export { minuteToStringHourMinite, minuteToMiliseconds };

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

const minuteToMiliseconds = min => {
  min = Number(min);
  console.log('min typeof', typeof min);
  console.log(min * 60 * 1000);
  return min * 60 * 1000;
};
