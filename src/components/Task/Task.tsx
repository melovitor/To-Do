import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task(){ 
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {/* <div className={styles.unchecked}>
                .
                </div> */}
                <div className={styles.checked}>
                    <Check/>
                </div>
                <p className={styles.done}>Integer urna interdum massa libero auctor neque turpis turpis semper.</p>
            </div>
            <div  className={styles.trash}>
                <Trash size={20}/>
            </div>
        </div>
    )
}