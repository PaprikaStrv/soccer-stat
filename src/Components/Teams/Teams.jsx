import React from "react";
import SearchTeam from "../SearchTeam/SearchTeam";
import SeasonDateFilter from "../SeasonDateFilter/SeasonDateFilter";
import Team from "./Team";
import s from "./teams.module.css";

const Teams = (props) => {
  let teams = [];

  //Проверка на наличия филтра(поиска по id) //создать отдельную функицю
  if (!props.searchResult) {
    teams = props.teamsList.teams.map((team) => (
      <Team key={team.id} team={team} />
    ));
  } else {
    for (let i = 0; i < props.teamsList.teams.length; i++) {
      if (
        parseInt(props.teamsList.teams[i].id, 10) ===
        parseInt(props.searchResult, 10)
      ) {
        teams = (
          <Team
            key={props.teamsList.teams[i].id}
            team={props.teamsList.teams[i]}
          />
        );
      }
    }
  }

  return (
    <div>
      <h2>Список команд лиги {props.leaguesList.name}</h2>
      <SearchTeam/>
      <div className={s.teamsWrapper}>{teams}</div> 
    </div>
  );
};

export default Teams;
