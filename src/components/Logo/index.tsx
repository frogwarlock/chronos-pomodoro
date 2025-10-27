// className é bom para localizar de onde vem, cuidar para não ter conflito com outras bibliotecas
import { TimerIcon } from 'lucide-react';
import styles from'./styles.module.css';

export function Logo() {

    return <div className={styles.logo}>
        <a className={styles.logoLink} href="#">
            <TimerIcon />
            <span>Chronos</span>
        </a>
    </div>;
}