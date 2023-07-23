import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
    id: number;
    content: string;
    done: boolean
}


export function Task({id, content, done}: TaskProps){ 
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={done === true ? styles.checked : styles.unchecked}>
                    <Check/>
                </div>
                <p className={done === true ? styles.done : ''}>{content}</p>
            </div>
            <div  className={styles.trash}>
                <Trash size={20}/>
            </div>
        </div>
    )
}