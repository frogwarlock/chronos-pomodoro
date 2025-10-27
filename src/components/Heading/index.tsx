// className é bom para localizar de onde vem, cuidar para não ter conflito com outras bibliotecas
import styles from'./styles.module.css';

// serve para definir o tipo das props que o componente espera receber
type HeadingProps = {
    children: React.ReactNode;
}

export function Heading({children}: HeadingProps) {

    return <h1 className={styles.heading}>{children}</h1>;
}