import { Calendar } from '@/widgets/calendar'
import styles from './planner-page.module.css'

export function PlannerPage() {
  return (
    <main className={styles.main}>
      <h1 className="visually-hidden">Планер</h1>
      <div className={styles.sidebar} aria-hidden="true" />
      <Calendar />
    </main>
  )
}
