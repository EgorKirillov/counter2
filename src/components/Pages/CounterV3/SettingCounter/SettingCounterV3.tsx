import React, {ChangeEvent} from 'react';
import s from './SettingCounterV3.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import {Button, TextField} from "@mui/material";
import {ErrorType} from "../Reducers/reducerV3counter";

type SettingCounterPropsType = {
   maxValue: number
   startValue: number
   changeMaxValue: (newMaxValue: number) => void
   changeStartValue: (newStartValue: number) => void
   applySetting: () => void
   errorText: ErrorType
   //errorMax: boolean
   //errorStart: boolean
}

export const SettingCounterV3: React.FC<SettingCounterPropsType> = ({maxValue, startValue, ...props}) => {
   
   function onChangeMaxValueHandler(e: ChangeEvent<HTMLInputElement>) {
      if (e.currentTarget) {
         let newValue = Math.floor(Number(e.currentTarget.value))
         props.changeMaxValue(newValue)
      }
   }
   
   function onChangeStartValueHandler(e: ChangeEvent<HTMLInputElement>) {
      if (e.currentTarget) {
         let newValue = Math.floor(Number(e.currentTarget.value))
         props.changeStartValue(newValue)
      }
   }
   
   // const errorMax = true
   // const errorStart = true
   
   return (
     <div className={s.conteiner}>
        <div className={s.defaultClass}>
           <div className={s.input}>
              <TextField
                key={1}
                // error={errorMax}
                color="primary"
                className={s.input1}
                type="number"
                value={maxValue}
                // helperText="Change max counter value"
                label="MAXIMUM(up to 99999):"
                onChange={onChangeMaxValueHandler}
                focused
              /></div>
           <div className={s.input}>
              <TextField
                key={2}
                // error={errorStart}
                // className={s.input}
                type={"number"}
                value={startValue}
                color="primary"
                focused
                // helperText="Change start counter value"
                label="START value:"
                onChange={onChangeStartValueHandler}
              /></div>
        </div>
        
        <div className={s.buttonGroup}><Button endIcon={<SettingsIcon/>} size={"large"} variant="outlined"
                                               disabled={props.errorText !== "press 'set' to confirm setting"}
                                               onClick={props.applySetting}>set</Button></div>
     
     </div>
   );
};

