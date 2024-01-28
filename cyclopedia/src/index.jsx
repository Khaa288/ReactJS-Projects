import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import CyclopediaClass from './CyclopediaClassPage';
import CyclopediaFunc from './CyclopediaFuncPage';

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Header/>

        <div className='row text-white'>
            <div className='col-6'>
                <span className='h1 text-warning text-center'>Class Component</span>
                <CyclopediaClass/>
            </div>

            <div className='col-6'>
                <span className='h1 text-warning text-center'>Functional Component</span>
                <CyclopediaFunc/>
            </div>
        </div>
    </div>
);