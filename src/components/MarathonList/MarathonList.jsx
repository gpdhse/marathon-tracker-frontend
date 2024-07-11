import style from './MarathonList.module.css'
import map from './assets/images/map.png'
import React from "react"

const MarathonList = () => {
    return (
        <div>
            <h1 className={style.title}>Список ваших марафонов</h1>
            <div>
                <p className={style.parametr}>Название марафона: </p>
                <p className={style.parametr}>Дата проведения: </p>
                <p className={style.parametr}>Время начала: </p>
                <p className={style.parametr}>Дистанция марафона: </p>
                <p className={style.parametr}>Количество участников: </p>
                <img className={style.map} src={map} alt="map " />
            </div>
        </div>
    );
}


export default MarathonList