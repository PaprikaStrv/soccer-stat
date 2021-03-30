import React from 'react';
import { NavLink } from "react-router-dom";
import s from './leagueItem.module.css'

const LeagueItem = (props) => {
   
    return (
        <div className={s.leagueItemWrapper}>
            <NavLink to={"/League/" + props.id} target="_blank" rel="nofollow noopener">
                {props.name} id: ({props.id}) 
            </NavLink> 
        </div>
    );
}

export default LeagueItem;