import styles from './Tasks.module.css' 
import  Clipboard  from '../../assets/Clipboard.svg'
import { Task } from '../Task/Task'
import { useState } from 'react'

interface TasksProps {
    newTask: any
}


export function Tasks({newTask}:TasksProps){

    return(
        <div className={styles.wrapper}>
            { newTask.length > 0 ? 
                newTask.map( (task: { id: number; content: string; done: boolean }) => {
                    return <Task
                        key={task.id}
                        id={task.id}
                        content={task.content}
                        done={task.done}
                    />
            }) 
            : 
                <div className={styles.empty}>
                    <img src={Clipboard} />
                    <h1>Você ainda não tem tarefas cadastradas</h1>
                    <h2>Crie tarefas e organize seus itens a fazer</h2>
                </div>
            }
        </div>
    )
}