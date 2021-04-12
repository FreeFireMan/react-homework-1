import React from 'react';
import style from './WalkingTheBlock.module.css'

export const WalkingTheBlock = ({main_text})=>{
    return(
        <div className={style.text_title}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&display=swap');
            </style>

                    <h1>{main_text}</h1>
                 <div className={style.block}>
                 </div>
        </div>

    );
}
