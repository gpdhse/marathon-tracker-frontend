import style from './SOSButton.module.css'
import React from "react"
import axios from "axios"
import { $host } from '../../api/axiousApi';


const SOSButton = () => {

    let {number, setNumber} = useState("")

    const onClick = () => {
        // SOS({number})
    };

    return (
        <form action="">
            <input className={style.inputField} type="text" placeholder='Номер человека' value={number} onChange={setNumber}/>
            <div class={style.sosButton} onClick ={ onClick }>SOS</div>
        </form>
    );
}

export default SOSButton