import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Info from "../../components/Info/Info";
import {cardsApi} from "../../api/api";
import {useDispatch} from "react-redux";
import {clearCards, setCurrentCards, setLoaderDetails} from "../../store/details-reduser";
import {filterCards} from "../../store/utils";
import {useAppSelector} from "../../store";
import Loader from "../../components/Loader/Loader";
import cls from './Details.module.css'


const Details = () => {


  const dispatch = useDispatch()
  const {id} = useParams()
  const currentCard = useAppSelector(state => state.details.currentCard)
  const loader = useAppSelector(state => state.details.loader)

  useEffect(() => {
    dispatch(setLoaderDetails(true))
    cardsApi.getCards()
      .then((data) => {
        dispatch(setCurrentCards(filterCards(data.data, id)))
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoaderDetails(false)))

    return () => {
      dispatch(clearCards())
    }
  }, [id, dispatch])


  return (
    <div className={cls.block}>
      {loader && <Loader/>}
      {currentCard && <Info currentCard={currentCard}/>}
    </div>
  );
};

export default Details;