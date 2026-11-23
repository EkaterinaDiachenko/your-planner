const date = new Date()
const options = {
  year: 'numeric',
  month: 'long',
}
export const nowYear = date.getFullYear()
export const monthIndex = date.getMonth()

export function getDaysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate()
}

export const monthAndYear = date.toLocaleDateString(undefined, options)

export function daysInMonth(year, monthIndex) {
  const days = getDaysInMonth(year, monthIndex)
  const allDays = []
  for (let day = 1; day <= days; day++) {
    allDays.push(day)
  }
  return allDays
}

export const days = daysInMonth(nowYear, monthIndex)
