import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';

//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6dyCVe2J-afssXECMkP2OpbyOGLOlck4",
  authDomain: "spotify-wrapped-ca411.firebaseapp.com",
  projectId: "spotify-wrapped-ca411",
  storageBucket: "spotify-wrapped-ca411.appspot.com",
  messagingSenderId: "201725267224",
  appId: "1:201725267224:web:193f0474500af3bda7226d",
  measurementId: "G-192SFM5CG5"
}; 

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
