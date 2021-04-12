import React from 'react';
import style from './Card.module.css'

export const Card = (props)=>{
    return(

            <div className={style.cards}>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
                </style>

                <img src={props.url_Img} alt=""/>
                <h2>{props.title_card}</h2>
                <p>{props.some_text}</p>
                <button>
                    {props.more_info}
                </button>
            </div>

    );
}
