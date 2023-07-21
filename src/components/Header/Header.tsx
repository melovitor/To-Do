import RocketLogo from '../../assets/Logo.svg'
import styles from './Header.module.css'


export function Header(){
    return(
        <header className={styles.header}>
            <img src={RocketLogo} alt="Rocket Logo" />
        </header>
    )
}