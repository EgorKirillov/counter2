import React, {useState} from 'react';
import s from './Counter.module.css'
import CounterValue from "./counterValue";
import MyButton from "../MyButton";
import {Button} from "@mui/material";
type CounterPropsType = {
    currentValue: number
    startValue: number
    maxValue: number
    increaseValue:()=>void
    resetValue: ()=>void
    errorText: "" | "incorrect 'START value'" | "incorrect 'MAX' and 'START' value" | "press 'set' to confirm setting"

}

const Counter = (props:CounterPropsType) => {

    let classValue = `${s.defaultClass} ${(props.currentValue === props.maxValue) ? s.red : ""}`
    let errorClass= s.error
    let disabledIncButton=(props.currentValue === props.maxValue && props.errorText === "")
    let disabledResetButton=(props.currentValue === props.startValue && props.errorText === "")


    return (
        <div className={s.conteiner}>
            { (!props.errorText)
                ?<CounterValue className={classValue} value={props.currentValue}/>
                :<CounterValue className={errorClass} value={props.errorText}/>
            }
            {/*<CounterValue className={classValue} value={props.currentValue}/>*/}

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