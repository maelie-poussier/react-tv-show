import s from "./style.module.css"
import { SMALL_IMAGE_COVER_BASE_URL } from "../../config"

export function TVShowListItem(props) {
  return <div onClick={()=>props.onClick(props.tvShow)} className={s.container}>
    <img alt="" className={s.image} src={SMALL_IMAGE_COVER_BASE_URL + props.tvShow.backdrop_path}/>
    <div className={s.title}>
      {props.tvShow.name}
    </div>
  </div>
}
