import React from "react"
import style from './TrackingMap.module.css'
import map from './assets/images/map.png'

const TrackingMap = () => {
    return (
        <div>
            <h1 className={style.title}>Просмотр марафона</h1>
            <div class={style.map}>
                <img src={map} alt="MAP" />
            </div>
        </div>
    );
}

export default TrackingMap
