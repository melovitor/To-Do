import styles from './Status.module.css'

export function Status(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.created}>
                <p>Tarefas criadas</p>
                <div className={styles.dot}>
                    5
                </div>
            </div>
            <div className={styles.conclued}>
                <p>Concluídas</p>
                <div className={styles.dot}>
                    2 de 5
                </div>
            </div>
        </div>
    )
}