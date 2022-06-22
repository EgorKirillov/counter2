import { combineReducers, legacy_createStore as createStore } from "redux"
import reducerV3counter from "../Pages/CounterV3/Reducers/reducerV3counter";
import reducerV4counter from "../Pages/CounterV4/Reducers/reducerV4counter";

export type AllCountersStateType=ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
   counterV3:reducerV3counter,
   counterV4:reducerV4counter
})
// let rootReducer = reducerV3counter


let store = createStore(rootReducer)

export default store