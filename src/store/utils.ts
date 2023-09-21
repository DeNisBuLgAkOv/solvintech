import {CardType} from "./cards-reducer";

export const filterCards = (cards: CardType[], id: string | undefined) => {
  const arr = cards.filter(el => el._id === id)
  return arr
}