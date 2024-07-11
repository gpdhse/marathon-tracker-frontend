import style from './AuthForm.module.css'
import React from "react"
import axios from "axios"
import { $host } from '../../api/axiousApi';
import { userLogin } from '../../api/adminApi'

const AuthForm = () => {

    let {email, setEmail} = useState("")
    let {password, setPassword} = useState("")

    const onClick = () => {
        userLogin({ email, password})
    };

    return (
        <div className={style.loginForm}>
            <form action="">
                <h1 className={style.title}>Войти</h1>
                <input className={style.inputField} type="text" placeholder='E-mail' value={email} onChange={setEmail} />
                <input className={style.inputField} type="text" placeholder='Пароль' value={password} onChange={setPassword}/>
                <button className={style.loginButton} value='Войти' onClick ={ onClick }>Войти</button>
            </form>
        </div>
    );
}
//TODO make @forgot password@



export const userLogin = async ({ email, password }) => {
    const { data } = await $host.post('/users/signIn', { email, password }, {
        headers: {
            'content-type': 'application/json'
        }
    })
}

export default AuthForm