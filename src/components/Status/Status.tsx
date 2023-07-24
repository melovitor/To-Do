import styles from './Status.module.css'

interface StatusProps {
    created: number
    completed: number
}

export function Status({created, completed}: StatusProps){
    return (
        <div className={styles.wrapper}>
            <div className={styles.created}>
                <p>Tarefas criadas</p>
                <div className={styles.dot}>
                    {created}
                </div>
            </div>
            <div className={styles.conclued}>
                <p>Concluídas</p>
                <div className={styles.dot}>
                    {completed} de {created}
                </div>
            </div>
        </div>
    )
}