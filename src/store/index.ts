import {createStore} from "redux";
import {combineReducers} from 'redux'
import {cardsReducer} from "./cards-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {detailsReducer} from "./details-reduser";

export const rootReducer = combineReducers({
  cards: cardsReducer,
  details: detailsReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector