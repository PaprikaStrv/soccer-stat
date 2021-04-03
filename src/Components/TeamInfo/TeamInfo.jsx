import React from "react";
import s from "./teamInfo.module.css";
import { NavLink, Switch } from "react-router-dom";
import { Route } from "react-router";
import TeamLeagueMatchesContainer from "./TeamLeagueMatches/TeamLeagueMatchesContainer";

const TeamInfo = (props) => {
//   console.log(props.team);

  let activeCompetitions = [];

  activeCompetitions = props.team.activeCompetitions.map((competition) => (
    <div>
      <NavLink to={"/team/" + props.team.id + "/" + competition.id}>
        {competition.name} id: {competition.id}
      </NavLink>
    </div>
  ));

  return (
    <div>
      <img
        src={props.team.crestUrl}
        alt={""}
        className={s.teamInfoLogoWrapper}
      />
      {props.team.name}
      <div className={s.avaliableCompetitions}>{activeCompetitions}</div>
      <Switch>
        <Route
          path="/team/:teamId/:competitionId"
          render={() => <TeamLeagueMatchesContainer />}
        />
      </Switch>
    </div>
  );
};

export default TeamInfo;
