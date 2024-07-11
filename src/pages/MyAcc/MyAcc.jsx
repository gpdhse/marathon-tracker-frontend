import React from "react"
import Logo from "../../components/Logo/Logo.jsx"
import MarathonList from "../../components/MarathonList/MarathonList.jsx"
import AddMarathonButton from "../../components/AddMarathonButton/AddMarathonButton.jsx"

const MyAcc = () => {
    return (
        <div>
            <Logo />
            <MarathonList />
            <AddMarathonButton />
        </div>
    )
}

export default MyAcc