import React from 'react';
import s from './CounterDisplayV3.module.css'
import {Button} from "@mui/material";
import {CounterValueV3} from './CounterValueV3';
import {ErrorType} from "../Reducers/reducerV3counter";


type CounterPropsType = {
   currentValue: number
   changeValue: (value: number) => void
   startValue: number
   maxValue: number
   resetValue: () => void
   errorText: ErrorType
}

export const Counter = (props: CounterPropsType) => {
   
   let number = `${s.numberClass} ${(props.currentValue === props.maxValue) ? s.red : ""}`
   let errorClass = `${s.error} ${(props.errorText !== "press 'set' to confirm setting") ? s.red : ""}`
   let disabledIncButton = (props.currentValue === props.maxValue || props.errorText !== "")
   let disabledResetButton = (props.currentValue === props.startValue || props.errorText !== "")
   
   const onclickIncHandler = () => {
      props.changeValue(props.currentValue+1)
   }
   
   return (
     <div className={s.conteiner}>
        <div className={s.defaultClass}>
           {(!props.errorText)
             ? <CounterValueV3 className={number} value={props.currentValue}/>
             : <CounterValueV3 className={errorClass} value={props.errorText}/>
           }
        </div>
        
        <div className={s.buttonGroup}>
           <Button size={"large"}
                   variant="outlined"
                   disabled={disabledIncButton}
                   onClick={onclickIncHandler}>inc +1
           </Button>
           <Button size={"large"}
                   variant="outlined"
                   disabled={disabledResetButton}
                   onClick={props.resetValue}>reset
           </Button>
        
        
        </div>
     </div>
   );
};

