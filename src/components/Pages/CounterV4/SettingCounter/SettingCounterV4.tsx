import React, {ChangeEvent} from 'react';
import s from './SettingCounterV4.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import {Button, TextField} from "@mui/material";

type SettingCounterPropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (newMaxValue: number) => void
    changeStartValue: (newStartValue: number) => void
    applySetting: () => void
    errorText: "" | "incorrect 'START value'" | "incorrect 'MAX' and 'START' value" | "press 'set' to confirm setting"
    errorMax: boolean
    errorStart: boolean
}

export const SettingCounterV4: React.FC<SettingCounterPropsType> = ({maxValue, startValue, ...props}) => {

    function onChangeMaxValueHandler(e: ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget) {
            let newValue = Math.floor(Number(e.currentTarget.value))
            e.currentTarget.value = ""
            props.changeMaxValue(newValue)
        }
    }

    function onChangeStartValueHandler(e: ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget) {
            let newValue = Math.floor(Number(e.currentTarget.value))
            e.currentTarget.value = ""
            props.changeStartValue(newValue)
        }
    }
let disabledSettingButton:boolean =  (props.errorText !== "") && (props.errorText !== "press 'set' to confirm setting")

    return (
        <div className={s.conteiner}>
            <div className={s.defaultClass}>
                <div className={s.input}>
                    <TextField
                        key={1}
                        error={props.errorMax}
                        color="primary"
                        className={s.input1}
                        type="number"
                        value={maxValue}
                        // helperText="Change max counter value"
                        label="MAXIMUM(up to 99999):"
                        onChange={onChangeMaxValueHandler}
                        focused
                    />
                </div>
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
                    />
                </div>
                <div>{props.errorText}</div>
            </div>

            <div className={s.buttonGroup}><Button endIcon={<SettingsIcon/>} size={"large"} variant="outlined"
                                                   disabled={disabledSettingButton}
                                                   onClick={props.applySetting}>set</Button></div>

        </div>
    );
};

