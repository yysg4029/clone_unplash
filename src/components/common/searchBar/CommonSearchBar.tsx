import { useState } from 'react'
import styles from './CommonSearchBar.module.scss'
import { useRecoilState } from 'recoil'
import { searchState } from '@/recoil/atoms/searchState'
import { pageState } from '@/recoil/atoms/pageState'

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState)
  const [page, setPage] = useRecoilState(pageState)
  const [text, setText] = useState('')
  const onChange = (event) =>{
    setText(event.target.value)
  }
  const onSearch = () =>{
    if(text === ""){
      setSearch('Korea') // Default 값으로 설정해둠.(atoms.searchState.ts안에 그렇게 설정되어있기는 함)
      setPage(1)
    }else{
      setSearch(text) // 작성한 input value를 받아서 설정해둠
      setPage(1)
    }
  }
  const handlekeyDown = (event : React.KeyboardEvent) =>{
    if(event.key === "Enter"){  // enter적을때 E를 소문자로 적으면 안됨
      if(text === ""){
        setSearch('Korea') // Default 값으로 설정해둠.(atoms.searchState.ts안에 그렇게 설정되어있기는 함)
      }else{
        setSearch(text) // 작성한 input value를 받아서 설정해둠
      }

    }
  }
  return (
    <div className={styles.searchBar}>
        <div className={styles.searchBar__search}>
            <input type="text" placeholder="찾으실 이미지를 검색하세요." className={styles.searchBar__search__input} value={text} onChange={onChange} onKeyDown={handlekeyDown}/>
            <img src="src/assets/icons/icon-search.svg" alt="nothing" onClick={onSearch}/>
        </div>
    </div>
  )
}

export default CommonSearchBar