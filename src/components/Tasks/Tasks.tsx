import styles from './Tasks.module.css' 
import  Clipboard  from '../../assets/Clipboard.svg'
import { Task } from '../Task/Task'

const taskList = [
    {
        id: 1,
        content: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
        done: true
    },
    {
        id: 2,
        content: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
        done: false
    },
]


export function Tasks(){
    return(
        <div className={styles.wrapper}>
            { taskList.length > 0 ? 
                taskList.map( task => {
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