import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Componenta/Header/Header";
import NavBar from "./Componenta/NavBar/NavBar";
import Profile from "./Componenta/Profile/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

export default App;
