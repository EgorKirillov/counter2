import {Dispatch} from "redux"
import {
   ChangeCurrentValueAC, ChangeErrorMessageAC,
   ChangeMaxValueAC, ChangeMinValueAC, ErrorType, ResetCurrentValueAC,
   SetMinMaxValueAC,
   
   
   
} from "./Reducers/reducerV3counter"
import {CounterV3} from "./CounterV3";
import {connect} from "react-redux";
import {AllCountersStateType} from "../../redux_store/store";


type MapStateToProps = {
   maxValue: number
   currentMaxValue: number
   minValue: number
   currentMinValue: number
   currentValue: number
   errorText: ErrorType
}
type MapDispatchToProps = {
   changeMaxValue: (value: number) => void
   changeMinValue: (value: number) => void
   changeCurrentValue: (value: number) => void
   setMinMaxValue: () => void
   resetValue: () => void
   changeErrorMessage: (error: ErrorType) => void
}
export type MyPostPropsFromConteinerType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AllCountersStateType): MapStateToProps => {
   return {
      maxValue: state.counterV3.maxValue,
      currentMaxValue: state.counterV3.currentMaxValue,
      minValue: state.counterV3.minValue,
      currentMinValue: state.counterV3.currentMinValue,
      currentValue: state.counterV3.currentValue,
      errorText: state.counterV3.errorText
   }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {// import Dispatch from REDUX!!
   return {
      changeMaxValue: (value: number) => dispatch(ChangeMaxValueAC(value)),
      changeMinValue: (value: number) => dispatch(ChangeMinValueAC(value)),
      changeCurrentValue: (value: number) => dispatch(ChangeCurrentValueAC(value)),
      setMinMaxValue: () => dispatch(SetMinMaxValueAC()),
      changeErrorMessage: (error: ErrorType) => dispatch(ChangeErrorMessageAC(error)),
      resetValue: () => dispatch(ResetCurrentValueAC()),
   }
}
export const CounterContainerV3 = connect(mapStateToProps, mapDispatchToProps)(CounterV3)