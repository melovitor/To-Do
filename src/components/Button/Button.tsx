import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'
import {PlusCircle} from 'phosphor-react'
 
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

export function Button({...props}: ButtonProps){
    return(
        <button className={styles.button} {...props}> 
            Criar
            <PlusCircle size={18} />
        </button>
    )
}