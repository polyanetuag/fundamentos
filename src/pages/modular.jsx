import styles from '../styles/Modular.module.css'
import Layout from '../components/Layout'

export default function Modular() {
  return (
    <Layout titulo="Exemplo de css modularizado">
      <div className={styles.purple}>
      <h1>Aplicando estilo com css module </h1>
    </div>
    </Layout>
  )
}