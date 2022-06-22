import React, {useState} from 'react';
import {SettingCounterV1} from "./SettingCounter/SettingCounterV1";
import Counter from "./DisplayCounter/CounterDisplayV1";
import s from "./CounterV1.module.css"



const CounterV1 = () => {

    let start = (localStorage.getItem("startValueV1")) ? Number(localStorage.getItem("startValueV1")) : 0
    let max = (localStorage.getItem("maxValueV1")) ? Number(localStorage.getItem("maxValueV1")) : 5
    const [startValue, setStartValue] = useState<number>(start)
    const [maxValue, setMaxValue] = useState<number>(max)
    const [sendStartValue, setSendStartValue] = useState<number>(start)
    const [sendMaxValue, setSendMaxValue] = useState<number>(max)
    const [value, setValue] = useState<number>(sendStartValue)
    const [errorText, setErrorText] = useState<"" | "incorrect 'START value'" | "incorrect 'MAX' and 'START' value" | "press 'set' to confirm setting">("")
    const [errorMax, setErrorMax] = useState<boolean>(false)
    const [errorStart, setErrorStart] = useState<boolean>(false)

    const increaseValue = () => {
        setValue(value + 1)
    }

    const resetValue = () => {
        setValue(sendStartValue)
    }
    const changeStartValue = (newStartValue: number) => {
        if (newStartValue < 0) {
            setErrorStart(true)
            setErrorText("incorrect 'START value'")
            setStartValue(-1)
        } else if (newStartValue >= maxValue) {
            setStartValue(maxValue)
            setErrorStart(true)
            setErrorMax(true)
            setErrorText("incorrect 'MAX' and 'START' value")
        } else {
            if (maxValue > newStartValue) {
                setErrorMax(false)
            }
            setStartValue(newStartValue)
            setErrorStart(false)
            setErrorText("press 'set' to confirm setting")
        }
    }
    const changeMaxValue = (newMaxValue: number) => {
        if (newMaxValue > 99999) {
            setMaxValue(99999)
        } else if (newMaxValue <= startValue) {
            setErrorMax(true)
            setErrorStart(true)
            setErrorText("incorrect 'MAX' and 'START' value")
            setMaxValue(newMaxValue < 0 ? 0 : startValue)
        } else {
            if (startValue >= 0) {
                setErrorStart(false)
                setErrorText("press 'set' to confirm setting")
            } else {
                setErrorText("incorrect 'START value'")
            }
            setMaxValue(newMaxValue)
            setErrorMax(false)
        }
    }
    const applySettings = () => {
        localStorage.setItem("startValueV1", JSON.stringify(startValue))
        localStorage.setItem("maxValueV1", JSON.stringify(maxValue))
        setSendStartValue(startValue)
        setSendMaxValue(maxValue)
        setValue(startValue)
        setErrorText("")

    }

    return (
        <div className={s.AppV1}>
            <SettingCounterV1
                startValue={startValue}
                maxValue={maxValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                applySetting={applySettings}
                errorText={errorText}
                errorStart={errorStart}
                errorMax={errorMax}
            />
            <Counter
                key={1}
                currentValue={value}
                maxValue={sendMaxValue}
                startValue={sendStartValue}
                errorText={errorText}
                increaseValue={increaseValue}
                resetValue={resetValue}
            />
        </div>
    );
};

export default CounterV1;