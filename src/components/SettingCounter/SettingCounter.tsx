import React, {ChangeEvent, useState} from 'react';
import s from './SettingCounter.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import MyButton from "../MyButton";
import {Button, TextField} from "@mui/material";

type SettingCounterPropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (newMaxValue: number) => void
    changeStartValue: (newStartValue: number) => void
    applySetting: () => void
    errorText:  "" | "incorrect 'START value'" | "incorrect 'MAX' and 'START' value" | "press 'set' to confirm setting"
    errorMax: boolean
    errorStart: boolean
}

export const SettingCounter: React.FC<SettingCounterPropsType> = ({maxValue, startValue, ...props}) => {
    // const [value, setValue] = useState<number>(0)
    // const addValue = () => setValue(value + 1)
    // const resetValue = () => setValue(0)
    // let classValue = `${s.defaultClass} ${(value === 10) ? s.red : ""}`


    function onChangeMaxValueHandler(e: ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget) {
            props.changeMaxValue(Number(e.currentTarget.value))
        }
    }

    function onChangeStartValueHandler(e: ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget) {
            props.changeStartValue(Number(e.currentTarget.value))
        }
    }


    let errorWarning = (props.errorText) ? true : false
    return (
        <div className={s.conteiner}>

            <div className={s.defaultClass}>

                <div className={s.input}><TextField
                    key={1}
                    error={props.errorMax}
                    color="primary"
                    className={s.input1}
                    type="number"
                    value={maxValue}
                    // helperText="Change max counter value"
                    label="MAXIMUM value:"
                    onChange={onChangeMaxValueHandler}
                    focused
                /></div>
                <div className={s.input}>
                    <TextField
                        key={2}
                        error={props.errorStart}
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
            {/* <div>
                <p>max value:</p>
                <input type="number" value={maxValue} onChange={onChangeMaxValueHandler}/>
                <p>start value:</p>
                <input type="number" value={startValue} onChange={onChangeStartValueHandler}/>
            </div>*/}

            <div className={s.buttonGroup}><Button endIcon={<SettingsIcon/>} size={"large"} variant="outlined"
                                                   disabled={props.errorText !== "press 'set' to confirm setting"}
                                                   onClick={props.applySetting}>set</Button></div>

        </div>
    );
};

