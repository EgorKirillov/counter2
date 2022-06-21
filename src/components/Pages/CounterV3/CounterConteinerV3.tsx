import {Dispatch} from "redux"
import {
   ChangeCurrentValueAC, ChangeErrorMessageAC,
   ChangeMaxValueAC, ChangeMinValueAC, ErrorType, ResetCurrentValueAC,
   SetMaxValueAC,
   SetMinValueAC, StateType,
   
   
} from "./Reducers/reducerV3counter"
import {CounterV3} from "./CounterV3";
import { connect } from "react-redux";


type MapStateToProps = {
   maxValue: number
   currentMaxValue: number
   minValue: number
   currentMinValue: number
   currentValue: number
   errorText: ErrorType
   
}
type MapDispatchToProps = {
   
   changeMaxValue: (value:number) => void
   changeMinValue: (value:number) => void
   changeCurrentValue: (value: number) => void
   setMaxValue: () => void
   setMinValue: () => void
   resetValue:  () => void
   changeErrorMessage: (error:ErrorType) => void
}
export type MyPostPropsFromConteinerType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: StateType):MapStateToProps => {
   return {
      maxValue: state.maxValue,
      currentMaxValue: state.currentMaxValue,
      minValue: state.minValue,
      currentMinValue: state.currentMinValue,
      currentValue: state.currentValue,
      errorText: state.errorText
   }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {// import Dispatch from REDUX!!
   return {
      changeMaxValue: (value: number) => dispatch(ChangeMaxValueAC(value)),
      changeMinValue: (value: number) => dispatch(ChangeMinValueAC(value)),
      changeCurrentValue: (value: number) => dispatch(ChangeCurrentValueAC(value)),
      setMaxValue: () => dispatch(SetMaxValueAC()),
      setMinValue: () => dispatch(SetMinValueAC()),
      changeErrorMessage: (error: ErrorType) => dispatch(ChangeErrorMessageAC(error)),
      resetValue:()=>dispatch(ResetCurrentValueAC()),
         }
}
export const CounterConteinerV3 = connect(mapStateToProps, mapDispatchToProps)(CounterV3)