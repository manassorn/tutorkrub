function formatHour (h) {
  return ('0' + h).slice(-2) + ':00'
}

function formatHourPeriod (h, p) {
  return formatHour(h) + ' - ' + formatHour(h+p)
}

const Utils = {
  formatHour,
  formatHourPeriod
}

export default Utils