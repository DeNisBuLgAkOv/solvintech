import React from 'react';
import cls from './Card.module.css'
import {CardType} from "../../store/cards-reducer";

type PropsType = {
  onClick: () => void
  card: CardType
}

const Card = (props: PropsType) => {
  const {onClick, card} = props
  return (
    <div onClick={onClick} className={cls.card}>
      <div style={{backgroundImage: `url(${card.picture})`}} className={cls.carton}></div>
      <main>
        <p>name:<span>{card.name}</span></p>
        <p>email:<span>{card.email}</span></p>
      </main>
    </div>
  );
};

export default Card;