import styles from './header.module.css'
import { monthAndYear } from '@/shared/lib/date.ts'

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        Your planner
      </a>
      <p className={styles.month}>
        <span className="visually-hidden">Текущий месяц: </span>
        {monthAndYear}
      </p>
    </header>
  )
}
