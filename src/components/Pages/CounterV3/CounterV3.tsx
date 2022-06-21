import React  from 'react';
import {SettingCounterV3} from "./SettingCounter/SettingCounterV3";
import s from "./CounterV3.module.css"
import {Counter} from './DisplayCounter/CounterDisplayV3';
import {MyPostPropsFromConteinerType} from "./CounterConteinerV3";


// type CounterV3propsType = { // =MyPostPropsFromConteinerType
//    maxValue: number
//    currentMaxValue: number
//    minValue: number
//    currentMinValue: number
//    currentValue: number
//    errorText: ErrorType
//    changeMaxValue: (value:number) => void
//    changeMinValue: (value:number) => void
//    changeCurrentValue: (value: number) => void
//    setMaxValue: () => void
//    setMinValue: () => void
//    changeErrorMessage: (error:ErrorType) => void
// }

export const CounterV3 = (props: MyPostPropsFromConteinerType) => {
   console.log(props)
   const applySettings = () => {
      props.setMaxValue()
      props.setMinValue()
   }
   return (
     <div className={s.AppV1}>
        <SettingCounterV3
          startValue={props.currentMinValue}
          maxValue={props.currentMaxValue}
          changeMaxValue={props.changeMaxValue}
          changeStartValue={props.changeMinValue}
          applySetting={applySettings}
          errorText={props.errorText}
        
        />
        <Counter
          key={1}
          currentValue={props.currentValue}
          changeValue={props.changeCurrentValue}
          maxValue={props.maxValue}
          startValue={props.minValue}
          errorText={props.errorText}
          resetValue={props.resetValue}
        />
     </div>
   );
};

