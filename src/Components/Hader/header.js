import React from 'react';
import style from './header.module.css';



export const Header = (props)=>{
    return(
        <div className={style.header}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&display=swap');
            </style>

            <div className={style.logo}>
                <img src={props.url} alt=""/>
            </div>



            <ul className={style.nav_bar}>
                <li><a href="#">{props.title_1}</a></li>
                <li><a href="#">{props.title_2}</a></li>
                <li><a href="#">{props.title_3}</a></li>
            </ul>

        </div>
    );
}