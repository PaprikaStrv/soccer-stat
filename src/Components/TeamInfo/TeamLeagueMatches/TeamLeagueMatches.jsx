import React from "react";
import TeamLeagueMatch from "./TeamLeagueMatch";

const TeamLeagueMatches = (props) => {
  console.log(props.matches);

  let matches = [];

  matches = props.matches.matches.map((match) => (
      <TeamLeagueMatch key={match.id} match={match}/>
  ))
  return <div>{matches}</div>;
};

export default TeamLeagueMatches;
