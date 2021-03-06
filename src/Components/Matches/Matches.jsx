import React from "react";
import SearchMatch from "../SearchMatch/SearchMatch";
import Match from "./Match";
import s from "./matches.module.css";

const Matches = (props) => {
  let Matches = [];

  //Проверка на наличия филтра(поиска по id) //создать отдельную функцию
  if (!props.searchResult) {
    Matches = props.leagueMatches.matches.map((match) => (
      <Match key={match.id} match={match} />
    ));
  } else {
    for (let i = 0; i < props.leagueMatches.matches.length; i++) {
      if (
        parseInt(props.leagueMatches.matches[i].id, 10) ===
        parseInt(props.searchResult, 10)
      ) {
        Matches = (
          <Match
            key={props.leagueMatches.matches[i].id}
            match={props.leagueMatches.matches[i]}
          />
        );
      }
    }
  }

  return (
    <div>
      <SearchMatch />
      <div className={s.matchesWrapper}>{Matches}</div>
    </div>
  );
};

export default Matches;
