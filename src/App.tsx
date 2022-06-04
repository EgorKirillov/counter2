import React, {useState} from 'react';
import './App.css';
import Counter from "./components/DisplayCounter/Counter";
import {SettingCounter} from "./components/SettingCounter/SettingCounter";


function App() {
    let start = (localStorage.getItem("startValue")) ? Number(localStorage.getItem("startValue")) : 0
    let max = (localStorage.getItem("maxValue")) ? Number(localStorage.getItem("maxValue")) : 5
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
        if (newMaxValue <= startValue) {
            setErrorMax(true)
            setErrorStart(true)
            setErrorText("incorrect 'MAX' and 'START' value")
            setMaxValue(newMaxValue < 0 ? 0 : startValue)
        } else {
            if (newMaxValue > startValue && startValue >= 0) {
                setErrorStart(false)
            }
            setMaxValue(newMaxValue)
            setErrorText("press 'set' to confirm setting")
            setErrorMax(false)

        }
    }
    const applySettings = () => {
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        setSendStartValue(startValue)
        setSendMaxValue(maxValue)
        setValue(startValue)
        setErrorText("")

    }


    return (
        <div className="App">
            <SettingCounter
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
}

export default App;
