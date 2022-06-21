import React from 'react';
import s from './CounterDisplayV1.module.css'
import CounterValueV1 from "./CounterValueV1";
import {Button} from "@mui/material";

type CounterPropsType = {
    currentValue: number
    startValue: number
    maxValue: number
    increaseValue: () => void
    resetValue: () => void
    errorText: "" | "incorrect 'START value'" | "incorrect 'MAX' and 'START' value" | "press 'set' to confirm setting"
}

const Counter = (props: CounterPropsType) => {

    let number = `${s.numberClass} ${(props.currentValue === props.maxValue) ? s.red : ""}`
    let errorClass = `${s.error} ${(props.errorText !== "press 'set' to confirm setting") ? s.red : ""}`
    let disabledIncButton = (props.currentValue === props.maxValue || props.errorText !== "")
    let disabledResetButton = (props.currentValue === props.startValue || props.errorText !== "")

    return (
        <div className={s.conteiner}>
            <div className={s.defaultClass}>
                {(!props.errorText)
                    ? <CounterValueV1 className={number} value={props.currentValue}/>
                    : <CounterValueV1 className={errorClass} value={props.errorText}/>
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


            </div>
        </div>
    );
};

export default Counter;