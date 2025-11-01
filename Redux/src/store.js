import { combineReducers, createStore } from "redux";
import { counterreducer } from "./couterreducer";



const rootreducer=combineReducers({
  Counter:counterreducer
})


export const store=createStore(rootreducer)