import style from './RegistrationForm.module.css'
import React from "react"

const RegistrationForm = () => {
    return (
        <div className={style.registrationForm}>
            
            <form action="" className='login-form'>
                <h1 className={style.title}>Зарегистрироваться</h1>
                <input className={style.inputField} type="text" placeholder='Name' />
                <input className={style.inputField} type="text" placeholder='Surname' />
                <input className={style.inputField} type="text" placeholder='E-mail' />
                <input className={style.inputField} type="text" placeholder='Password' />
                <input className={style.registrationButtton} type="button" value='Зарегистрироваться' />
            </form>
        </div>
    );
}

export default RegistrationForm