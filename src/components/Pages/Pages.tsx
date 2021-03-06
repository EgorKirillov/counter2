import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import CounterV1 from './CounterV1/CounterV1'
import CounterV2 from './CounterV2/CounterV2'
import Error404 from './Error404'
import {CounterContainerV3} from "./CounterV3/CounterContainerV3";
import {CounterContainerV4} from './CounterV4/CounterContainerV4'

export const PATH = {
   v1: '/v1',
   v2: '/v2',
   v3: '/v3',
   v4: '/v4',
   
}

function Pages() {
   
   return (
     <div>
        <Routes>
           <Route path={'/'} element={<Navigate to={PATH.v1}/>}/>
           <Route path={PATH.v1} element={<CounterV1/>}/>
           <Route path={PATH.v2} element={<CounterV2/>}/>
           <Route path={PATH.v3} element={<CounterContainerV3/>}/>
           <Route path={PATH.v4} element={<CounterContainerV4/>}/>
           
           <Route path={'/*'} element={<Error404/>}/>
        </Routes>
     </div>
   )
}

export default Pages
