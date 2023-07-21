import { Header } from './components/Header/Header'
import { Input } from './components/Input/Input'
import styles from './App.module.css'
import './global.css'
import { Button } from './components/Button/Button'

export default function App() {

  return (
    <div className={styles.wrapper}>
    <Header/>
      <div className={styles.home}>
        <Input placeholder='Adicione uma nova tarefa'/>
        <Button/>
      </div>
    </div>
  )
}