import React from 'react';
import {CardType} from "../../store/cards-reducer";
import cls from './Info.module.css'
import {useNavigate} from "react-router-dom";

type PropsType = {
  currentCard: CardType[]
}

const Info = (props: PropsType) => {
  const navigate = useNavigate()
  const card = props.currentCard[0]


  return (
    <div className={cls.container}>
      <div className={cls.block}>
        <div style={{backgroundImage: `url(${card.picture})`}} className={cls.image}></div>
        <main>
          <p>name:<span>{card.name}</span></p>
          <p>age:<span>{card.age}</span></p>
          <p>email:<span>{card.email}</span></p>
          <p>phone:<span>{card.phone}</span></p>
          <p>about:<span>{card.about}</span></p>
        </main>
        <button className={cls.btn} onClick={() => navigate(-1)}>X</button>
      </div>
    </div>
  );
};

export default Info;