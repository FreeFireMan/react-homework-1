import React from 'react';
import style from './Card.module.css'

export const Card = (prors)=>{
    return(

            <div className={style.cards}>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
                </style>

                <img src={prors.url_Img} alt=""/>
                <h2>{prors.title_card}</h2>
                <p>{prors.some_text}</p>
                <button>
                    {prors.more_info}
                </button>
            </div>

    );
}