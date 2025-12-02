// className é bom para localizar de onde vem, cuidar para não ter conflito com outras bibliotecas
import styles from'./styles.module.css';

export function Countdown() {

    return <div className={styles.containerCountdown}>
        00:00
    </div>;
}