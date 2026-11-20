import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        Your planner
      </a>
      <p className={styles.month}>
        <span className="visually-hidden">Текущий месяц: </span>Ноябрь
      </p>
    </header>
  )
}
