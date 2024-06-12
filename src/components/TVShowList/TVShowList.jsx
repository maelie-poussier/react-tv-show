import s from "./style.module.css"
import {TVShowListItem} from "../TVShowListItem/TVShowListItem"

export function TVShowList(props) {
  return <>
    <div className={s.title} > You may also like: </div>
    <div className={s.list}>
      { props.tvShowList.map((tvShow)=> {
        return (
          <span className={s.tv_show_list_item} key={tvShow.id}>
            <TVShowListItem tvShow={tvShow} onClick={props.onClickItem}/>
          </span>
        )
      }) }
    </div>
  </>
}
