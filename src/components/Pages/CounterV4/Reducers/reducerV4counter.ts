export type StateTypeV4 = {
   maxValue: number
   minValue: number
   currentValue: number
   errorText: string
   errorMax: boolean
   errorMin: boolean
   viewSetting:boolean
}

type ActionType =
  ReturnType<typeof ChangeMaxValueAC>
  | ReturnType<typeof ChangeMinValueAC>
  | ReturnType<typeof ChangeCurrentValueAC>
  | ReturnType<typeof ResetCurrentValueAC>
  | ReturnType<typeof SetMinMaxValueAC>
 // | ReturnType<typeof ChangeErrorMessageAC>


export const ChangeMaxValueAC = (value: number) => ({type: "CHANGE-MAX-VALUE" as const, value})
export const ChangeMinValueAC = (value: number) => ({type: "CHANGE-MIN-VALUE" as const, value})
export const ChangeCurrentValueAC = (value: number) => ({type: "CHANGE-CURRENT-VALUE" as const, value})
export const ResetCurrentValueAC = () => ({type: "RESET-CURRENT-VALUE" as const})
export const SetMinMaxValueAC = () => ({type: "SET-MIN-MAX-VALUE" as const})
//export const ChangeErrorMessageAC = (errorText: string) => ({type: "CHANGE-ERROR-MESSAGE" as const, errorText})


export const initState: StateTypeV4 = {
   maxValue: 3,
   minValue: 0,
   currentValue: 0,
   errorText: "",
   errorMax: false,
   errorMin: false,
   viewSetting:false
}


const reducerV4counter = (state: StateTypeV4 = initState, action: ActionType): StateTypeV4 => {
   let stateCopy = {} as StateTypeV4
   switch (action.type) {
      case "CHANGE-MAX-VALUE":
         stateCopy = {
            ...state,
            maxValue: action.value,
            errorText: "",
            errorMin: false,
            errorMax: false
         }
         if (action.value > 99999) {
            stateCopy.errorText = "error";
            stateCopy.maxValue = 100000;
            stateCopy.errorMax = true;
         }  if (state.minValue >= action.value) {
            stateCopy.errorText = "error";
            stateCopy.errorMin = true;
            stateCopy.errorMax = true;
         }
         return stateCopy
      case "CHANGE-MIN-VALUE":
         stateCopy = {
            ...state,
            minValue: action.value,
            errorText: "",
            errorMin: false,
            errorMax: false
         }
         if (action.value < 0 || action.value > 99998) {
            stateCopy.errorText = "error"
            stateCopy.errorMin = true
         }  if (action.value >= state.maxValue) {
            stateCopy.errorText = "error"
            stateCopy.errorMin = true;
            stateCopy.errorMax = true;
         }
         return stateCopy
      case "SET-MIN-MAX-VALUE":
         return {...state, errorText: "", currentValue: state.minValue, viewSetting:!state.viewSetting}
      case "CHANGE-CURRENT-VALUE":
         return {...state, currentValue: action.value}
      case "RESET-CURRENT-VALUE":
         return {...state, currentValue: state.minValue}
      // case "CHANGE-ERROR-MESSAGE":
      //    return {...state, errorText: action.errorText}
     //default: return state
   }
   return state
}
export default reducerV4counter
