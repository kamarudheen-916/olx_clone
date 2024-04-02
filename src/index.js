import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './context/context';
import firebase from './firebase/config';
import Context from './context/context';

ReactDOM.render(
        <Context >
                <FirebaseContext.Provider value={{firebase}}>
                        <App />
                </FirebaseContext.Provider>
        </Context>
    ,
 document.getElementById('root'));
