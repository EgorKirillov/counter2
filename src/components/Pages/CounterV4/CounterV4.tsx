import React from 'react';
import s from "./CounterV4.module.css";

import CounterDisplayV4 from "./DisplayCounter/CounterDisplayV4";
import { SettingCounterV4 } from './SettingCounter/SettingCounterV4';
import {MyPostPropsFromConteinerType} from "./CounterConteinerV4";

const CounterV4 = (props: MyPostPropsFromConteinerType) => {


    const onClickIncValue = () => {
        props.changeCurrentValue(props.currentValue+1)
    }

    return (

        <div className={s.AppV2}>
            {(props.viewSetting)
                ? <SettingCounterV4
                    startValue={props.minValue}
                    maxValue={props.maxValue}
                    changeMaxValue={props.changeMaxValue}
                    changeStartValue={props.changeMinValue}
                    applySetting={props.setMinMaxValue}
                    errorText={props.errorText}
                    errorStart={props.errorMin}
                    errorMax={props.errorMax}
                />
                : <CounterDisplayV4
                    key={1}
                    currentValue={props.currentValue}
                    maxValue={props.maxValue}
                    startValue={props.minValue}
                    errorText={props.errorText}
                    increaseValue={onClickIncValue}
                    resetValue={props.resetValue}
                    goToSetting={props.setMinMaxValue}
                />}
        </div>

    );
};


export default CounterV4;