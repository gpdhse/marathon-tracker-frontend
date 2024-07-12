import React from "react"
import LogoWithName from "../../components/LogoWithName/LogoWithName.jsx"
import AuthForm from "../../components/AuthForm/AuthForm.jsx"
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx"


const Login = () => {

    return (
        <div>
            <LogoWithName />
            <AuthForm />
            <RegistrationForm />
        </div>
    )
}

export default Login