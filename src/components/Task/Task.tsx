import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
    id: number;
    content: string;
    done: boolean
    onDeleteTask: (id:number) => void
    onCompleted: (id:number) => void
}


export function Task({id, content, done, onDeleteTask, onCompleted}: TaskProps){ 
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={done === true ? styles.checked : styles.unchecked} onClick={() => onCompleted(id)}>
                    <Check/>
                </div>
                <p className={done === true ? styles.done : ''}>{content}</p>
            </div>
            <div  className={styles.trash} onClick={() => onDeleteTask(id)}>
                <Trash size={20}/>
            </div>
        </div>
    )
}