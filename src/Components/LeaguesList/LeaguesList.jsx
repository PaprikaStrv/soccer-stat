import React from "react";
import * as axios from "axios";
import s from "./leaguesList.module.css";
import LeagueItem from "./LeagueItem";

const LeaguesList = (props) => {
  let League = [];
  if (!props.leaguesList.competitions) {
    League = <LeagueItem key={props.leaguesList.id} id={props.leaguesList.id} area={props.leaguesList.area} name={props.leaguesList.name}/>
  } else {
    League = props.leaguesList.competitions.map((league) => (
      <LeagueItem key={league.id} id={league.id} area={league.area} name={league.name} />
    ));
  }
  console.log(props.leaguesList)

  return (
    <div>
      <div>Список лиг</div>
      <div className={s.leaguesContainer}>{League}</div>
    </div>
  );
};

export default LeaguesList;
