import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9s0iD1LpgVNhKFZi41A7mFHeYBqjsOBg",
  authDomain: "rrecords-store.firebaseapp.com",
  projectId: "rrecords-store",
  storageBucket: "rrecords-store.appspot.com",
  messagingSenderId: "503881046500",
  appId: "1:503881046500:web:a34a89d6c1e6772c094ff1"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </>
)
