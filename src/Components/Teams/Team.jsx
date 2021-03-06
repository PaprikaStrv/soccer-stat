import React from "react";
import { NavLink } from "react-router-dom";
import s from "./teams.module.css";

const Team = (props) => {
  // console.log(props.team);
  return (
    <NavLink to={"/team/" + props.team.id}>
      <div className={s.teamWrapper}>
        <div className={s.teamContainer}>
          <div className={s.teamPreview}>
            <img src={props.team.crestUrl} alt={""} className={s.teamImage} />
            {props.team.name}
          </div>
          <div>Страна: {props.team.area.name}</div>
          <div>Id: {props.team.id}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default Team;
