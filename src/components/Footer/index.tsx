// className é bom para localizar de onde vem, cuidar para não ter conflito com outras bibliotecas
import styles from'./styles.module.css';


export function Footer() {

    return <footer className={styles.footer}>
        <a href="">Entenda como funciona a técnica pomodoro</a>
        <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💟</a>
    </footer>;
}