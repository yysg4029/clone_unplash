import styles from './CommonFooter.module.scss'

function CommonFooter() {
  return (
    <div className={styles.footer}>
        <div className={styles.pagination}>
            <button className={styles.pagination__button}>
                <img src="src/assets/icons/icon-leftarrow.svg" alt="nothing" />
            </button>
            {/* 변경될 UI 부분 */}
            <span>1</span>
            <button className={styles.pagination__button}>
                <img src="src/assets/icons/icon-rightarrow.svg" alt="nothing" />
            </button>
        </div>
    </div>
  )
}

export default CommonFooter