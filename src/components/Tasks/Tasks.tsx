import styles from './Tasks.module.css' 
import  Clipboard  from '../../assets/Clipboard.svg'
import { Task } from '../Task/Task'

export function Tasks(){
    return(
        <div className={styles.wrapper}>
            <Task/>
            <Task/>
            {/* <div className={styles.empty}>
                <img src={Clipboard} />
                <h1>Você ainda não tem tarefas cadastradas</h1>
                <h2>Crie tarefas e organize seus itens a fazer</h2>
            </div> */}
        </div>
    )
}