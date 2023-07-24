import styles from './Tasks.module.css' 
import  Clipboard  from '../../assets/Clipboard.svg'
import { Task } from '../Task/Task'

interface TasksProps {
    newTask: any,
    onDeleteTask: (id:number) => void
}


export function Tasks({newTask, onDeleteTask}:TasksProps){


    return(
        <div className={styles.wrapper}>
            { newTask.length > 0 ? 
                newTask.map( (task: { id: number; content: string; done: boolean }) => {
                    return <Task
                        key={task.id}
                        id={task.id}
                        content={task.content}
                        done={task.done}
                        onDeleteTask={(id) => {onDeleteTask(id)}}
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