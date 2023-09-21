import axios, {AxiosResponse} from 'axios'
import {CardType} from "../store/cards-reducer";

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  }
})

export const cardsApi = {
  getCards() {
    return instance.get<null, AxiosResponse<CardType[]>>('/api/');
  }
}