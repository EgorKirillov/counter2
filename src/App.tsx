import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';



function App() {

    return (

            <div>

                <HashRouter>
                    <Header/>
                    <Pages/>
                </HashRouter>


                {/*<SettingCounterV1*/}
                {/*    startValue={startValue}*/}
                {/*    maxValue={maxValue}*/}
                {/*    changeMaxValue={changeMaxValue}*/}
                {/*    changeStartValue={changeStartValue}*/}
                {/*    applySetting={applySettings}*/}
                {/*    errorText={errorText}*/}
                {/*    errorStart={errorStart}*/}
                {/*    errorMax={errorMax}*/}
                {/*/>*/}
                {/*<CounterDisplayV2*/}
                {/*    key={1}*/}
                {/*    currentValue={value}*/}
                {/*    maxValue={sendMaxValue}*/}
                {/*    startValue={sendStartValue}*/}
                {/*    errorText={errorText}*/}
                {/*    increaseValue={increaseValue}*/}
                {/*    resetValue={resetValue}*/}
                {/*/>*/}
            </div>

    );
}

export default App;
