import React, {useState} from 'react';
import s from './Counter.module.css'
import CounterValue from "./counterValue";
import MyButton from "./MyButton";

const Counter = () => {
    const [value, setValue] = useState<number>(0)

    const addValue = () =>  setValue(value + 1)

    const resetValue = () =>  setValue(0)

    let classValue = `${s.defaultClass} ${(value === 10) ? s.red : ""}`

    return (
        <div className={s.conteiner}>
            <CounterValue className={classValue} value={value}/>
            <div className={s.buttonConteiner}>
                <MyButton className={s.buttonClass}
                          disabled={(value === 10)}
                          buttonName={'inc'}
                          callback={addValue}/>
                <MyButton className={s.buttonClass}
                          disabled={(value === 0)}
                          buttonName={'reset'}
                          callback={resetValue}/>
            </div>
        </div>
    );
};

export default Counter;