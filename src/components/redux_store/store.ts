import { combineReducers, legacy_createStore as createStore } from "redux"
import {reducerV3counter} from "../Pages/CounterV3/Reducers/reducerV3counter";

export type CounterV3StateType=ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
   counterV3:reducerV3counter
})
// let rootReducer = reducerV3counter


let store = createStore(rootReducer)

export default store