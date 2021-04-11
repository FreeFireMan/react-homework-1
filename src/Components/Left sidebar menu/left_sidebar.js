import React from 'react';
import style from './left-sidebar-menu.module.css'


export const Left_Sidebar = (props)=>{
    return(
        <div className={style.left_menu}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&display=swap');
            </style>

            <div className={style.box_img}>
                <img src={props.url} alt="" />
            </div>
            <h2> {props.top_title}</h2>
            <div className={style.ul_list}>
                <ul>
                    <li><a href="#">{props.link_1}</a></li>
                    <li><a href="#">{props.link_2}</a></li>
                    <li><a href="#">{props.link_3}</a></li>
                    <li><a href="#">{props.link_4}</a></li>
                    <li><a href="#">{props.link_5}</a></li>
                    <li><a href="#">{props.link_6}</a></li>
                </ul>
            </div>
        </div>
    );
}