import React from 'react';
import { NavLink } from "react-router-dom";
import s from './leagueItem.module.css'

const LeagueItem = (props) => {
   
    return (
        <div className={s.leagueItemWrapper}>
            <NavLink to={"/" + props.id}>
                {props.area.name}:{props.name}
            </NavLink>
        </div>
    );
}

export default LeagueItem;