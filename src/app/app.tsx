import { PlannerPage } from '@/pages/planner'
import { Header } from '@/widgets/header'
import './styles/global.css'
import styles from './app.module.css'

export function App() {
  return (
    <div className={styles.page}>
      <Header />
      <PlannerPage />
    </div>
  )
}
