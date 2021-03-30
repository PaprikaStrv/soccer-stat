import React from "react";
import Team from "./Team";
import Match from "./Team";
import s from "./teams.module.css";

const Teams = (props) => {
  let teams = [];

  teams = props.teamsList.teams.map((team) => (
     <Team key={team.id} team={team}/> 
  ));
  // //Проверка на наличия филтра(поиска по id)
  // if (!props.searchResult) {
  //   Matches = props.leagueMatches.matches.map((match) => (
  //     <Match key={match.id} match={match} />
  //   ));
  // } else {
  //   for (let i = 0; i < props.leagueMatches.matches.length; i++) {
  //     if (
  //       parseInt(props.leagueMatches.matches[i].id, 10) ===
  //       parseInt(props.searchResult, 10)
  //     ) {
  //       Matches = (
  //         <Match
  //           key={props.leagueMatches.matches[i].id}
  //           match={props.leagueMatches.matches[i]}
  //         />
  //       );
  //     }
  //   }
  // }

  return <div className={s.matchesWrapper}>{teams}</div>;
};

export default Teams;
