import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Header } from './components/Header/Header'
import { Input } from './components/Input/Input'
import styles from './App.module.css'
import './global.css'
import { Button } from './components/Button/Button'
import { Status } from './components/Status/Status'
import { Tasks } from './components/Tasks/Tasks'

interface TasksProps {
  id: number;
  content: string;
  done: boolean;
}

export default function App() {
  const [newTask, setNewTask] = useState('')
  const [allTaskObj, setAllTaskObj] = useState<TasksProps[]>([])

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()
    const newTaskObj = {
      id: Math.floor(10000* Math.random()),
      content: newTask,
      done: false,
    }
    setAllTaskObj([...allTaskObj, newTaskObj])
    setNewTask('')
  }

  function deleteTask(taskId:number) {
    console.log(`Deletando a task: ${taskId}`)
    const tasksWithoutDeletedOne = allTaskObj.filter(task => {
      return task.id !== taskId
    })
    setAllTaskObj(tasksWithoutDeletedOne)
  }

  return (
    <div className={styles.wrapper}>
        <Header/>
      <div className={styles.container}>
        <form className={styles.home} onSubmit={handleCreateNewTask}>
          <Input 
            value={newTask}
            placeholder='Adicione uma nova tarefa'
            onInvalid={(event: InvalidEvent<HTMLInputElement>) => {
              event.target.setCustomValidity('Escreva uma nova tarefa.')
            }} 
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              event.target.setCustomValidity('')
              setNewTask(event.target.value)
            }}
            required/>
          <Button 
            type='submit' 
          />
        </form>
          <Status created={allTaskObj.length} completed={0}/>
          <Tasks newTask={allTaskObj} onDeleteTask={deleteTask}/>
      </div>
    </div>
  )
}