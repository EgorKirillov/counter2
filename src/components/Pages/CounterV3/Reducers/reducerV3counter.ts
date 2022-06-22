
export type ErrorType =
  ""
  | "incorrect 'START value'"
  | "incorrect 'MAX value'"
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
type SetMinMaxValueAT = {
   type: "SET-MIN-MAX-VALUE"
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
  | ReturnType<typeof SetMinMaxValueAC>
  | ReturnType<typeof ChangeErrorMessageAC>

// ChangeMaxValueAT
// | ChangeMinValueAT
// | ChangeCurrentValueAT
// | ResetCurrentValueAT
// | SetMaxValueAT
// | SetMinValueAT
// |SetMinMaxValueAT
// | ChangeErrorMessageAT
//////////////////////
export const ChangeMaxValueAC = (value: number) => ({type: "CHANGE-MAX-VALUE" as const, value})
export const ChangeMinValueAC = (value: number) => ({type: "CHANGE-MIN-VALUE" as const, value})
export const ChangeCurrentValueAC = (value: number) => ({type: "CHANGE-CURRENT-VALUE" as const, value})
export const ResetCurrentValueAC = () => ({type: "RESET-CURRENT-VALUE" as const})
export const SetMaxValueAC = () => ({type: "SET-MAX-VALUE" as const})
export const SetMinValueAC = () => ({type: "SET-MIN-VALUE" as const})
export const SetMinMaxValueAC = () => ({type: "SET-MIN-MAX-VALUE" as const})
export const ChangeErrorMessageAC = (errorText: ErrorType) => ({type: "CHANGE-ERROR-MESSAGE" as const, errorText})
////////////////////


export const initState: StateType = {
   maxValue: 3,
   currentMaxValue: 3,
   minValue: 0,
   currentMinValue: 0,
   currentValue: 0,
   errorText: "" as ErrorType,
}


const reducerV3counter = (state: StateType = initState, action: ActionType): StateType => {
   let stateCopy = {...state}
   switch (action.type) {
      case "CHANGE-MAX-VALUE":
         stateCopy.currentMaxValue=0
         stateCopy = {...state, currentMaxValue: action.value, errorText: "press 'set' to confirm setting" as ErrorType}
         if (action.value > 99999) {
            stateCopy = {...stateCopy, errorText: "incorrect 'MAX value'" as ErrorType, currentMaxValue: 100000}
         } else if (state.currentMinValue >= action.value) {
            stateCopy = {...stateCopy, errorText: "incorrect 'MAX' and 'START' value" as ErrorType}
         }
         return stateCopy
      case "CHANGE-MIN-VALUE":
         stateCopy = {...state, currentMinValue: action.value, errorText: "press 'set' to confirm setting" as ErrorType}
         if (action.value < 0 || action.value > 99999) {
            stateCopy = {...stateCopy, errorText: "incorrect 'START value'"}
         }
         if (action.value >= state.currentMaxValue) {
            stateCopy = {...stateCopy, errorText: "incorrect 'MAX' and 'START' value"}
         }
         return stateCopy
      case   "SET-MIN-MAX-VALUE"  :
         return {...state, minValue: state.currentMinValue, maxValue: state.currentMaxValue, errorText:"", currentValue:state.currentMinValue}
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
