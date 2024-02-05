import React, {useEffect} from 'react';
import Card from "../../components/Card/Card";
import cls from './HomePage.module.css'
import {cardsApi} from "../../api/api";
import {useDispatch} from "react-redux";
import {incrementItems, setCards, setLoader} from "../../store/cards-reducer";
import {useAppSelector} from "../../store";
import {useNavigate} from "react-router-dom";
import Loader from "../../components/Loader/Loader";



const HomePage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cards = useAppSelector(state => state.cards.cards)
  const displayedItems = useAppSelector(state => state.cards.displayedItems)
  const loader = useAppSelector(state => state.cards.loader)


  useEffect(() => {
    dispatch(setLoader(true))
    cardsApi.getCards()
      .then((data) => {
        dispatch(setCards(data.data))
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoader(false)))
  }, [])

  return (
    <>
      <div>sdsdfsdf</div>
      {loader && <Loader/>}
      <div className={cls.container}>
        {cards.slice(0, displayedItems).map(el => <Card onClick={() => navigate(`/card/${el._id}/`)} key={el._id}
                                                        card={el}/>)}
      </div>
      {displayedItems < cards.length && (
        <button className={cls.btn} onClick={() => dispatch(incrementItems())}>Load more...</button>
      )}
    </>
  );
};

export default HomePage;