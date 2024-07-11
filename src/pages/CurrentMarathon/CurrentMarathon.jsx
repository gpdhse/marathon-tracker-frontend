import React from "react"
import Logo from "../../components/Logo/Logo.jsx"
import TrackingMap from "../../components/TrackingMap/TrackingMap.jsx"
import ParticipantsList from "../../components/ParticipantsList/ParticipantsList.jsx"
import SOSButton from "../../components/SOSButton/SOSButton.jsx"

const CurrentMarathon = () => {
    return (
        <div>
            <Logo />
            <TrackingMap />
            <ParticipantsList />
            <SOSButton />
        </div>
    )
}

export default CurrentMarathon