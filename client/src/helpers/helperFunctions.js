function getTimesLeadingZero(time) {
  return time < 10 ? `0${time}` : time;
}

function getFullTime(timestamp) {
  const dateStart = new Date(timestamp);
  const hours = dateStart.getHours();
  const minutes = dateStart.getMinutes();
  const seconds = dateStart.getSeconds();

  return { hours, minutes, seconds };
}

export { getTimesLeadingZero, getFullTime }