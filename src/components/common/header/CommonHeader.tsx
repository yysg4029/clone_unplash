import { useNavigate } from 'react-router-dom'
import styles from './CommonHeader.module.scss'

function CommonHeader() {
  const navigate = useNavigate()
  const moveToPage = (filter : string) => {
    if(filter === 'main') navigate('/')
    else if(filter === 'bookmark') navigate('/bookmark')
  
  }
    

  return (
    <header className={styles.header}>
        <div className={styles.header__logoBox} onClick={()=>moveToPage('main')}>
            <img src="src/assets/images/image-logo.svg" alt="nothing" className={styles.header__logoBox}/>
            <span className={styles.header__logoBox__title}>PhotoSplash</span>
        </div>
        <div className={styles.header__profileBox}>
            <button className={styles.header__profileBox_button}> 사진제출 </button>
            <button className={styles.header__profileBox_button} onClick={()=>moveToPage('bookmark')}> 북마크 </button>
            <button className={styles.header__profileBox_userName}> 쫑구 | 000@youtube.com </button>
        </div>
    </header>
  )
}

export default CommonHeader