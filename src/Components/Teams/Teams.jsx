import React from "react";
import SeasonDateFilter from "../SeasonDateFilter/SeasonDateFilter";
import Team from "./Team";
import s from "./teams.module.css";

const Teams = (props) => {
  let teams = [];

  teams = props.teamsList.teams.map((team) => (
    <Team key={team.id} team={team} />
  ));

  return (
    <div>
      <h2>Список команд лиги {props.leaguesList.name}</h2>
      <SeasonDateFilter/>
      <div className={s.teamsWrapper}>{teams}</div> 
    </div>
  );
};

export default Teams;
