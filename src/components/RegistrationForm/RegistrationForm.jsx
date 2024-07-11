import style from './RegistrationForm.module.css'
import React from "react"
import axios from "axios"
import { userRegistration } from '../../api/adminApi'

const RegistrationForm = () => {

    let {username, setUsername} = useState("")
    let {email, setEmail} = useState("")
    let {password, setPassword} = useState("")

    const onClick = () => {
        userRegistration({username, email, password})
    };
    
    return (
        <div className={style.registrationForm}>
            <form action="" className='login-form'>
                <h1 className={style.title}>Зарегистрироваться</h1>
                <input className={style.inputField} type="text" placeholder='Name' value={username} onChange={setUsername}/>
                <input className={style.inputField} type="text" placeholder='E-mail' value={email} onChange={setEmail}/>
                <input className={style.inputField} type="text" placeholder='Password' value={password} onChange={setPassword}/>
                <input className={style.registrationButtton} type="button" value='Зарегистрироваться' onClick ={ onClick } />
            </form>
        </div>
    );
}

export default RegistrationForm