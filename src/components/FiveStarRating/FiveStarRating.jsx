import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating(props) {
  // Déclarer un tableau d'étoiles (jsx) vide
  const starList = [];
  // stocker dans une variable le nombre d'étoile plein
  const starFillCount = Math.floor(props.rating)
  // Stocker dans une variable si oui ou non il y a u,e demie étoile
  const hasStartHalf = props.rating - starFillCount >= 0.5;
  // Stocker dans une variable le nombre d'étoiles vide
  const starEmptyCount = 5 - starFillCount - (hasStartHalf ? 1 : 0)
  // Pusher dans le tableau les étoiles pleine
  for (let i=0; i < starFillCount; i++) {
    starList.push(<StarFill />)
  }
  // Pusher dans le tableau les demi étoiles (si il y en a)
  if (hasStartHalf) {
    starList.push(<StarHalf />)
  }
  // Pusher dans le tableau les étoiles vides
  for (let i=0; i < starEmptyCount; i++) {
    starList.push(<StarEmpty />)
  }

  return <div>
    {starList}
  </div>
}
