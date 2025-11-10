import styles from "./header.module.scss"
const Header = () => {
  return (
    <header className={styles.Header}>
        <ul>
            <li><a href="#">mss ethiopia</a></li>
            <li className={styles.all_competitors}><a href="#">All competitors</a></li>
        </ul>
    </header>
  )
}

export default Header