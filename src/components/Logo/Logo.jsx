import s from "./style.module.css";

export function Logo(props) {
  return <>
    <div className={s.container}>
      <img className={s.img} src={props.image}/>
      <span className={s.title}>{props.title}</span>
    </div>
    <span className={s.subtitle}>{props.subtitle}</span>
  </>
}
