const SET_CARDS = "SET_CARDS"
const INCREMENT_ITEM = "INCREMENT_ITEM"
const SET_LOADER = "SET_LOADER"

export interface CardType {
  _id: string,
  age: number,
  email: string,
  index: number,
  name: string,
  phone: string,
  picture: string
  about: string
}

type ActionsType = ReturnType<typeof setCards>
  | ReturnType<typeof incrementItems>
  | ReturnType<typeof setLoader>

export type initialStateType = {
  cards: CardType[],
  displayedItems: number,
  loader: boolean,
}

const initialState: initialStateType = {
  cards: [],
  displayedItems: 4,
  loader: false,
}


export const cardsReducer = (state: initialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case "SET_CARDS": {
      return {...state, cards: action.payload}
    }
    case "INCREMENT_ITEM": {
      return {...state, displayedItems: state.displayedItems + 4}
    }
    case "SET_LOADER": {
      return {...state, loader: action.payload}
    }
    default: {
      return state
    }
  }
}


///action
export const setCards = (cards: CardType[]) => ({type: SET_CARDS, payload: cards} as const)
export const incrementItems = () => ({type: INCREMENT_ITEM} as const)
export const setLoader = (flag: boolean) => ({type: SET_LOADER, payload: flag} as const)