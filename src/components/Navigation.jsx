import Link from "next/link"
import styles from '../styles/Navigation.module.css'

export default function Navigation(props) {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={props.destiny}>
      <div className={styles.navigation} style={{
        backgroundColor: props.cor ?? 'slateblue'
      }}>
        {props.text}
      </div>
    </Link>
  )
}