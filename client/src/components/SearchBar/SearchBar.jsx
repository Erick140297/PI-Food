import React from 'react'
import s from "./SearchBar.module.css"

const SearchBar = () => {
  return (
    <form >
      <input className={s.text} type="text" placeholder='Search recipe...'/>
      <input className={s.btn} type="submit" value="Search"/>
    </form>
  )
}

export default SearchBar