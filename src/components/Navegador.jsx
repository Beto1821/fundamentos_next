import Link from "next/link"
import styles from '../styles/navegador.module.css'

export default function Navegador(props) {
    return (
        <div>
        <Link href={props.destino}>
            <div className={styles.navegador}>
            {props.texto}
            </div>
        </Link>
    </div>
    )

}