import styles from './calendar.module.css'
import { days } from '@/shared/lib/date.ts'

export function Calendar() {
  const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

  return (
    <section className={styles.calendar} aria-label="Календарь">
      <ul className={styles.weekdays} aria-label="Дни недели">
        {weekdays.map((day) => (
          <li className={styles.weekday} key={day}>
            <span className={styles.weekdayLabel}>{day}</span>
          </li>
        ))}
      </ul>
      <ul className={styles.days} aria-label="Дни">
        {days.map((day) => (
          <li className={styles.day} key={day}></li>
        ))}
      </ul>
    </section>
  )
}
