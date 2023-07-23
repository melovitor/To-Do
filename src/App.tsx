import { Header } from './components/Header/Header'
import { Input } from './components/Input/Input'
import styles from './App.module.css'
import './global.css'
import { Button } from './components/Button/Button'
import { Status } from './components/Status/Status'
import { Tasks } from './components/Tasks/Tasks'

export default function App() {

  return (
    <div className={styles.wrapper}>
        <Header/>
      <div className={styles.container}>
        <form className={styles.home}>
          <Input placeholder='Adicione uma nova tarefa'/>
          <Button type='submit' />
        </form>
          <Status/>
          <Tasks/>
      </div>
    </div>
  )
}