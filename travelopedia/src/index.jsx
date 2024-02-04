import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Layout/Header';
import DestinationIndex from './Components/DestinationIndex';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import RandomDestination from './Components/RandomDestination';
import DestinationList from './Components/DestinationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode>
        <Provider store={store}>
            <Header/>
            <DestinationIndex/>
            <DestinationList/>
            <RandomDestination/>
        </Provider>
    </React.StrictMode>
);