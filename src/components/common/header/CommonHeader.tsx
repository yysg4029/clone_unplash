import styles from './CommonHeader.module.scss'

function CommonHeader() {
  return (
    <div className={styles.header}>
        <div className={styles.header__logoBox}>
            <img src="src/assets/images/image-logo.svg" alt="nothing" className={styles.header__logoBox}/>
            <span className={styles.header__logoBox__title}>PhotoSplash</span>
        </div>
        <div className={styles.header__profileBox}>
            <button className={styles.header__profileBox_button}>사진제출</button>
            <button className={styles.header__profileBox_button}>북마크</button>
            <button className={styles.header__profileBox_userName}>쫑구 | 000@youtube.com</button>
        </div>
    </div>
  )
}

export default CommonHeader