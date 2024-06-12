import s from "./style.module.css"
import  { Search as SearchIcon } from "react-bootstrap-icons"

export function SearchBar(props) {

  function submit(e) {
    if(e.key=="Enter" && e.target.value.trim() !== "") {
      props.onSubmit(e.target.value)
    }
  }
  return <>
    <SearchIcon size={27} className={s.icon}/>
    <input onKeyUp={submit} type="text" placeholder="Search a tv show" className={s.input}/>
  </>;
}
