import {CardType} from "./cards-reducer";

const SET_CURRENT_CARDS = "SET_CURRENT_CARDS"
const CLEAR_CARD = "CLEAR_CARD"
const SET_LOADER_DETAILS = "SET_LOADER_DETAILS"


export type initialStateType = {
  currentCard: CardType[] | null,
  loader: boolean

}

const initialState: initialStateType = {
  currentCard: null,
  loader: false
}

type ActionsType = ReturnType<typeof setCurrentCards>
  | ReturnType<typeof clearCards>
  | ReturnType<typeof setLoaderDetails>


export const detailsReducer = (state: initialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case SET_CURRENT_CARDS: {
      return {...state, currentCard: action.payload}
    }
    case CLEAR_CARD:
      return {...state, currentCard: null}
    case "SET_LOADER_DETAILS": {
      return {...state, loader: action.payload}
    }
    default: {
      return state
    }
  }
}


///action
export const setCurrentCards = (card: CardType[]) => ({type: SET_CURRENT_CARDS, payload: card} as const)
export const clearCards = () => ({type: CLEAR_CARD,} as const)
export const setLoaderDetails = (flag: boolean) => ({type: SET_LOADER_DETAILS, payload: flag} as const)
