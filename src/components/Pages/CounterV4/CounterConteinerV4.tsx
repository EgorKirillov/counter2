import {Dispatch} from "redux"
import {
   ChangeCurrentValueAC,
   ChangeMaxValueAC,
   ChangeMinValueAC,
   ResetCurrentValueAC,
   SetMinMaxValueAC,
} from "./Reducers/reducerV4counter"
import CounterV4 from "./CounterV4";
import {connect} from "react-redux";
import {AllCountersStateType} from "../../redux_store/store";


type MapStateToProps = {
   maxValue: number
   minValue: number
   currentValue: number
   errorText: string
   errorMax: boolean
   errorMin: boolean
   viewSetting: boolean
   
}
type MapDispatchToProps = {
   changeMaxValue: (value: number) => void
   changeMinValue: (value: number) => void
   changeCurrentValue: (value: number) => void
   setMinMaxValue: () => void
   resetValue: () => void
}
export type MyPostPropsFromConteinerType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AllCountersStateType): MapStateToProps => {
   return {
      maxValue: state.counterV4.maxValue,
      minValue: state.counterV4.minValue,
      currentValue: state.counterV4.currentValue,
      errorText: state.counterV4.errorText,
      errorMin: state.counterV4.errorMin,
      errorMax: state.counterV4.errorMax,
      viewSetting: state.counterV4.viewSetting,
   }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {// import Dispatch from REDUX!!
   return {
      changeMaxValue: (value: number) => dispatch(ChangeMaxValueAC(value)),
      changeMinValue: (value: number) => dispatch(ChangeMinValueAC(value)),
      changeCurrentValue: (value: number) => dispatch(ChangeCurrentValueAC(value)),
      setMinMaxValue: () => dispatch(SetMinMaxValueAC()),
      resetValue: () => dispatch(ResetCurrentValueAC()),
   }
}
export const CounterConteinerV4 = connect(mapStateToProps, mapDispatchToProps)(CounterV4)