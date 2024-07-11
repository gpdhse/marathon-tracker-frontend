import style from './CreateMarathonForm.module.css'
import React from "react"

const CreateMarathonForm =()=> {
    return (
        <div>
            <h1 className={style.title}>Создание нового марафона</h1>
            <div className={style.createForm}>
                <form action="">
                    <input className={style.inputField} type="text" placeholder='Time start' />
                    <input className={style.inputField} type="text" placeholder='Time end' />
                    <input className={style.inputField} type="text" placeholder='Whole distance' />
                    <input className={style.inputField} type="text" placeholder='Number of participants' />
                    <input className={style.submitButton} type="button" value='Submit' />
                </form>
            </div>
        </div>
    );

}

export default CreateMarathonForm