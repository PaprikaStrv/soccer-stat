import React from "react";
import s from "./teams.module.css";

const Team = (props) => {
  console.log(props.team)
  return (
    <div >
      {props.team.name}
      <img src={props.team.crestUrl} alt={""}/>
    </div>
  );
};

export default Team;
