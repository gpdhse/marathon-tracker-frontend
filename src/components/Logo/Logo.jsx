import style from './Logo.module.css'
import logo from '../../assets/images/logo.png'
import React from "react"

const Logo = () => {
    return (
        <img className={style.logo}  src={logo} alt="Logo" />
    );
}

export default Logo