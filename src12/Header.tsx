import React from "react";
import s from './Header.module.css'

const Header =(props:any) => {
    return(
        <header className={s.header}>
            <img src='https://www.pinclipart.com/picdir/middle/563-5638155_transparent-gym-class-clipart-black-and-white-zumba.png'/>
        </header>
    )
}

export default Header