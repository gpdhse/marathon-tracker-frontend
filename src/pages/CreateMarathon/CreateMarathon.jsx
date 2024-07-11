import React from "react"
import Logo from "../../components/Logo/Logo.jsx"
import CreateMarathonForm from "../../components/CreateMarathonForm/CreateMarathonForm.jsx"
import CreateRoute from "../../components/CreateRoute/CreateRoute.jsx"

const CreateMarathon = () => {
    return (
        <div>
            <Logo />
            <CreateMarathonForm />
            <CreateRoute />
            <style>
            </style>
        </div>
    )
}

export default CreateMarathon