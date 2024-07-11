import style from './AuthForm.module.css'
import React from "react"

const AuthForm = () => {
    return (
        <div className={style.loginForm}>
            <form action="">
                <h1 className={style.title}>Войти</h1>
                <input className={style.inputField} type="text" placeholder='E-mail' />
                <input className={style.inputField} type="text" placeholder='Пароль' />
                <button className={style.loginButton} value='Войти' onClick={
                    click
                } >Войти</button>
            </form>
        </div>
    );
}
//TODO make @forgot password@

const click = () => {
    userLogin({ email, password }).then((data) => {
        console.log(data)
        dispatch(setAuthAction(data))
    })
}

export const userLogin = async ({ email, password }) => {
    const { data } = await $host.post('/users/signIn', { email, password }, {
        headers: {
            'content-type': 'application/json'
        }
    })
}

export default AuthForm