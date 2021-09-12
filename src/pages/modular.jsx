import styles from '../styles/Modular.module.css'
import Link from 'next/link'

export default function Modular() {
  return (
    <div className={styles.purple}>
      <Link href="/">Voltar</Link>
      <h1>Aplicando estilo com css module </h1>
    </div>
  )
}