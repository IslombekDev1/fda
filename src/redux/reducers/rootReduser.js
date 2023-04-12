import { combineReducers } from "redux";
import createReducer from "../reducers/create-reducer";
import likedReduser from "../reducers/like-reduser";
import basketReduser from "./basket-reducer";

//2ta reducerlani 1ta qivoldik
const rootReducer = combineReducers({
  createReducer,
  likedReduser,
  basketReduser
})

export default rootReducer