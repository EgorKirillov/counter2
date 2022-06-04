import React from 'react';
import {HashRouter} from 'react-router-dom';
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
        </div>

    );
}

export default App;
