import Utils from "./Utils";
import addWeeks from "date-fns/addWeeks";
import startOfWeek from "date-fns/startOfWeek";
import addDays from "date-fns/addDays";
import fnsIsToday from "date-fns/isToday";

function isToday(date) {
  return fnsIsToday(date)
}

function getDaysInWeek() {
  return ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์','เสาร์']
}

function getWeeklyDates(num) {
  const startDate = startOfWeek(new Date())
  let count = 0
  return Utils.range(num).map(i => {
    return Utils.range(7).map(j => {
      return addDays(startDate, count++)
    })
  })
}

function getWeeklyDatesShortFormat(num) {
  const dates = getWeeklyDates(num)
  return dates.map(i => {
    return i.map(date => {
      return formatShortDateMonth(date)
    })
  })
}

function getWeeklyDateRanges(num) {
  return Utils.range(num).map(i => {
    const startDate = addWeeks(startOfWeek(new Date()), i)
    const endDate = addDays(startDate, 6)
    return [startDate, endDate]
  })
}

function getWeeklyDateRangesShortFormat(num) {
  return getWeeklyDateRanges(num).map(([startDate, endDate]) => {
    return formatShortDateMonth(startDate) + ' - ' + formatShortDateMonth(endDate)
  })
}

function formatShortDateMonth(date) {
  return date.getDate() + ' ' + formatShortMonth(date)
}

function formatShortMonth(date) {
  return date.toLocaleString('th-th', {month:'short'})
}
function formatDate(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  console.log(date)
  return date.toLocaleDateString('th-th', options)
}
function formatHour (h) {
  return ('0' + h).slice(-2) + ':00'
}
function formatHourPeriod (h, p) {
  return formatHour(h) + ' - ' + formatHour(h+p)
}

const DateUtils = {
  formatHour,
  formatHourPeriod,
  formatDate,
  getDaysInWeek,
  getWeeklyDates,
  getWeeklyDatesShortFormat,
  getWeeklyDateRangesShortFormat,
  isToday,
}
export default DateUtils