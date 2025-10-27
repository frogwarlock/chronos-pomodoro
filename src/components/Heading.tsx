// className é bom para localizar de onde vem, cuidar para não ter conflito com outras bibliotecas
import styles from'./Heading.module.css';

export function Heading() {
    return <h1 className={styles.heading}>This is a Heading Component</h1>;
}