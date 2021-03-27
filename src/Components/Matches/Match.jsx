import React from "react";
import s from "./matches.module.css";

const Match = (props) => {
  console.log(props.match);
  return (
    <div className={s.matchContainer}>
      <div>
        <div>
          {props.match.awayTeam.name} - {props.match.score.fullTime.awayTeam}
        </div>
        <div>
          {props.match.homeTeam.name} - {props.match.score.fullTime.awayTeam}
        </div>
      </div>
      <div className={s.statusInfo}>
        <div>{props.match.status}</div>
      </div>
    </div>
  );
};

export default Match;
