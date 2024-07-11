import style from './LogoWithName.module.css'
import logo from '../../assets/images/logo.png'
import React from "react"

const LogoWithName = () => {
    return (
        <div className={style.logo}>
            <img src={logo} alt="Logo" />
        </div>
    );
}

export default LogoWithName