import {AllCountersStateType} from "../../../redux_store/store";

export type ErrorType =
  ""
  | "incorrect 'START value'"
  | "incorrect 'MAX' and 'START' value"
  | "press 'set' to confirm setting"
  | "error"
export type StateType = {
   maxValue: number
   currentMaxValue: number
   minValue: number
   currentMinValue: number
   currentValue: number
   errorText: ErrorType
}
/*type ChangeMaxValueAT =
  {
     type: "CHANGE-MAX-VALUE"
     value: number
  }
type ChangeMinValueAT = {
   type: "CHANGE-MIN-VALUE"
   value: number
}
type ChangeCurrentValueAT = {
   type: "CHANGE-CURRENT-VALUE"
   value: number
}
type ResetCurrentValueAT = {
   type: "RESET-CURRENT-VALUE"
}
type SetMaxValueAT = {
   type: "SET-MAX-VALUE"
   value: number
}
type SetMinValueAT = {
   type: "SET-MIN-VALUE"
   value: number
}
type ChangeErrorMessageAT = {
   type: "CHANGE-ERROR-MESSAGE"
   error: ErrorType
}*/
type ActionType =
  ReturnType<typeof ChangeMaxValueAC>
  | ReturnType<typeof ChangeMinValueAC>
  | ReturnType<typeof ChangeCurrentValueAC>
  | ReturnType<typeof ResetCurrentValueAC>
  | ReturnType<typeof SetMaxValueAC>
  | ReturnType<typeof SetMinValueAC>
  | ReturnType<typeof ChangeErrorMessageAC>

// ChangeMaxValueAT
// | ChangeMinValueAT
// | ChangeCurrentValueAT
// | ResetCurrentValueAT
// | SetMaxValueAT
// | SetMinValueAT
// | ChangeErrorMessageAT
//////////////////////
export const ChangeMaxValueAC = (value: number) => ({type: "CHANGE-MAX-VALUE" as const, value})
export const ChangeMinValueAC = (value: number) => ({type: "CHANGE-MIN-VALUE" as const, value})
export const ChangeCurrentValueAC = (value: number) => ({type: "CHANGE-CURRENT-VALUE" as const, value})
export const ResetCurrentValueAC = () => ({type: "RESET-CURRENT-VALUE" as const})
export const SetMaxValueAC = () => ({type: "SET-MAX-VALUE" as const})
export const SetMinValueAC = () => ({type: "SET-MIN-VALUE" as const})
export const ChangeErrorMessageAC = (errorText: ErrorType) => ({type: "CHANGE-ERROR-MESSAGE" as const, errorText})
////////////////////


export const initState: StateType = {
   maxValue: 10,
   currentMaxValue: 10,
   minValue: 0,
   currentMinValue: 0,
   currentValue: 0,
   errorText: "" as ErrorType,
}


const reducerV3counter = (state: StateType= initState , action: ActionType): StateType => {
   let stateCopy = {...state}
   switch (action.type) {
      case "CHANGE-MAX-VALUE":
         stateCopy = {...state, currentMaxValue: action.value, errorText: "" as ErrorType}
         if (state.currentMaxValue > 99999) {
            return stateCopy = {...stateCopy, errorText: "error"}
         } else if (state.currentMinValue >= state.currentMaxValue) {
            return stateCopy = {...stateCopy, errorText: "incorrect 'MAX' and 'START' value"}
         } else
            return stateCopy
      
      
      case "SET-MAX-VALUE":
         return {...state, maxValue: state.currentMaxValue}
      case "CHANGE-MIN-VALUE":
         stateCopy = {...state, currentMinValue: action.value, errorText: "" as ErrorType}
         if (state.currentMinValue < 0 || state.currentMinValue > 99999) {
            stateCopy = {...stateCopy, errorText: "incorrect 'START value'"}
         }
         if (state.currentMinValue >= state.currentMaxValue) {
            stateCopy = {...stateCopy, errorText: "incorrect 'MAX' and 'START' value"}
         }
         return stateCopy
      case   "SET-MIN-VALUE"  :
         return {...state, minValue: state.currentMinValue}
      case      "CHANGE-CURRENT-VALUE"      :
         return {...state, currentValue: action.value}
      case      "RESET-CURRENT-VALUE"      :
         return {...state, currentValue: state.minValue}
      case      "CHANGE-ERROR-MESSAGE"      :
         return {...state, errorText: action.errorText}
     //default: return state
   }
   return state
}
export default reducerV3counter
