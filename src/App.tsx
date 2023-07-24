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
  const storedTasks:any = localStorage.getItem("todolist");
  const storedTasksCounter:any = localStorage.getItem("todolistcounter");
  
  const [newTask, setNewTask] = useState('')
  const [allTaskObj, setAllTaskObj] = useState<TasksProps[]>(storedTasks !== null ? JSON.parse(storedTasks) : [])
  const [tasksCompleted, setTasksCompleted] = useState( JSON.parse(storedTasksCounter))  

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()
    const newTaskObj = {
      id: Math.floor(10000* Math.random()),
      content: newTask,
      done: false,
    }
    setAllTaskObj([...allTaskObj, newTaskObj])
    localStorage.setItem("todolist", JSON.stringify([...allTaskObj, newTaskObj]))
    setNewTask('')
  }

  function deleteTask(taskId:number) {
    const tasksWithoutDeletedOne = allTaskObj.filter(task => {
      return task.id !== taskId
    })
    setAllTaskObj(tasksWithoutDeletedOne)
    localStorage.setItem("todolist", JSON.stringify(tasksWithoutDeletedOne))
  }

  
  function completedTask(taskId: number) {
    const completedTaskById = allTaskObj.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setAllTaskObj(completedTaskById);
    countCompletedTask(completedTaskById)
    localStorage.setItem("todolist", JSON.stringify(completedTaskById))
  }

  function countCompletedTask(completedTaskById: any){
    let count = 0 
    completedTaskById.map((task:any) => {
      if (task.done === true) {
        count++;
      }
    })
    setTasksCompleted(count)
    localStorage.setItem("todolistcounter", JSON.stringify(count))
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
          <Status created={allTaskObj.length} completed={tasksCompleted}/>
          <Tasks newTask={allTaskObj} onDeleteTask={deleteTask} onCompleted={completedTask}/>
      </div>
    </div>
  )
}