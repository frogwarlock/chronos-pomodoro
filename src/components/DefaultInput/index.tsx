import styles from './styles.module.css'

type DefaultInputProps = {
    id: string; // serve pra forçar o que o meu componente vai receber
    labelText: string;
} & React.ComponentProps<'input'>;

//desestruturação de props
export function DefaultInput({id, type, labelText, ...rest}: DefaultInputProps) {
    return (
        <>
            {/* {labelText && <label htmlFor={ id }>{ labelText }</label> } */}
            <label htmlFor={ id }>{ labelText }</label>
            <input className={styles.input} id={ id } type={ type } {...rest} />
        </>
    );
}