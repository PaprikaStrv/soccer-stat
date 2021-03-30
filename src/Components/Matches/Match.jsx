import React from "react";
import s from "./matches.module.css";

const Match = (props) => {
  console.log(props.match)
  return (
    <div className={s.matchContainer}>
      <div className={s.teamsScore}>
        <div>{props.match.awayTeam.name} - {props.match.score.fullTime.awayTeam}</div>
        <div>{props.match.homeTeam.name} - {props.match.score.fullTime.awayTeam}</div>
      </div>
      <div>
        {props.match.status} <br></br>
        id: {props.match.id}<br></br>
        {props.match.utcDate}
      </div>
    </div>
  );
};

export default Match;
