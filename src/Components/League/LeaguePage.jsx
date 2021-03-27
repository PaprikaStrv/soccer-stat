import React from "react";
import MatchesContainer from "../Matches/MatchesContainer";

const LeaguePage = (props) => {
  return (
    <div>
      <img src={props.leaguesList.emblemUrl} alt={""} />
      {props.leaguesList.name}
      {props.leaguesList.area.name} - Календарь
      <MatchesContainer/>
    </div>
  );
};

export default LeaguePage;
