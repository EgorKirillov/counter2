import React from 'react';
import s from './CounterDisplayV4.module.css'
import CounterValueV4 from "./counterValueV4";
import {Button} from "@mui/material";

type CounterPropsType = {
    currentValue: number
    startValue: number
    maxValue: number
    increaseValue: () => void
    resetValue: () => void
    goToSetting: () => void
    errorText: string
}

const CounterDisplayV4 = (props: CounterPropsType) => {

    let number = `${s.numberClass} ${(props.currentValue === props.maxValue) ? s.red : ""}`
    let errorClass = `${s.error} ${(props.errorText !== "press 'set' to confirm setting") ? s.red : ""}`
    let disabledIncButton = (props.currentValue === props.maxValue || props.errorText !== "")
    let disabledResetButton = (props.currentValue === props.startValue || props.errorText !== "")

    return (
        <div className={s.conteiner}>
            <div className={s.defaultClass}>
                {(!props.errorText)
                    ? <CounterValueV4 className={number} value={props.currentValue}/>
                    : <CounterValueV4 className={errorClass} value={props.errorText}/>
                }
            </div>

            <div className={s.buttonGroup}>
                <Button size={"large"}
                        variant="outlined"
                        disabled={disabledIncButton}
                        onClick={props.increaseValue}>inc +1
                </Button>
                <Button size={"large"}
                        variant="outlined"
                        disabled={disabledResetButton}
                        onClick={props.resetValue}>reset
                </Button>
                <Button size={"large"}
                        variant="outlined"
                        disabled={false}
                        onClick={props.goToSetting}>setting
                </Button>


            </div>
        </div>
    );
};

export default CounterDisplayV4;