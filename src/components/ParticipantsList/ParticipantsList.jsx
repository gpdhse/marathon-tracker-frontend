import style from './ParticipantsList.module.css'
import React from "react"

const ParticipantsList = () => {
    return (
        <div>
            <h1>Список участников</h1>
            <div className={style.selectedPerson}>
                <img src="" alt="profile-photo" />
                <p className={style.parametr}>name</p>
                <p className={style.parametr}>age</p>
                <p className={style.parametr}>health rate</p>
                <p className={style.parametr}>xOy</p>
            </div>,
            <ul>
                <li className={style.person}>
                    <p className={style.parametr}>health rate</p>
                    <p className={style.parametr}>xOy</p>
                </li>
            </ul>
        </div>
    );
}

export default ParticipantsList
