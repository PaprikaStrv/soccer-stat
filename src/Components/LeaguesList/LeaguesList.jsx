import React from "react";
import s from "./leaguesList.module.css";
import LeagueItem from "./LeagueItem";
import SearchLeague from "./../SearchLeague/SearchLeague";

const LeaguesList = (props) => {
  let League = [];

  //Проверка на наличия филтра(поиска по id)
  if (!props.searchResult) {
    League = props.leaguesList.competitions.map((league) => (
      <LeagueItem
        key={league.id}
        id={league.id}
        area={league.area}
        name={league.name}
      />
    ));
  } else {
    for (let i = 0; i < props.leaguesList.competitions.length; i++) {
      if (
        parseInt(props.leaguesList.competitions[i].id, 10) ===
        parseInt(props.searchResult, 10)
      ) {
        League = (
          <LeagueItem
            key={props.leaguesList.competitions[i].id}
            id={props.leaguesList.competitions[i].id}
            area={props.leaguesList.competitions[i].area}
            name={props.leaguesList.competitions[i].name}
          />
        );
      }
    }
  }

  return (
    <div>
      <div className={s.leaguesListHeader}>
        <h2>Список турниров по футблоу</h2>
        <SearchLeague />
      </div>
      <div className={s.leaguesContainer}>{League}</div>
    </div>
  );
};

export default LeaguesList;
