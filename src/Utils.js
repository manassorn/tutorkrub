function formatTimestamp(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
  return date.toLocaleDateString('th-th', options) + ' ' + date.toLocaleTimeString('th-th')
}

function formatShortMonth(date) {
  return date.toLocaleString('th-th', {month:'short'})
}

function formatDate(date) {
   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return date.toLocaleDateString('th-th', options)
}

function formatHour (h) {
  return ('0' + h).slice(-2) + ':00'
}

function formatHourPeriod (h, p) {
  return formatHour(h) + ' - ' + formatHour(h+p)
}

function formatFullMonth(date) {
  const options = { month: 'long'};
  
  return date.toLocaleDateString('th-th', options)
}

function truncateDateHour(date, hour) {
  const d = new Date(date.getTime())
  d.setHours(hour, 0, 0, 0)
  return d
}

function strToDate(str) {
  return new Date(str)
}

function range(n) {
  return [...Array(n).keys()]
}

const Utils = {
  formatTimestamp,
  formatDate,
  formatHour,
  formatHourPeriod,
  formatShortMonth,
  formatFullMonth,
  truncateDateHour,
  strToDate,
  range
}

export default Utils