import React from "react";
import { getTeamMatchesCurrentLeagueThunkCreator } from "./../../../Redux/team-reducer";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { useEffect } from "react";
import TeamLeagueMatches from "./TeamLeagueMatches";
import Preloader from "../../Preloader/Preloader";

const TeamLeagueMatchesContainer = (props) => {
    console.log(props.match.params)
  useEffect(() => {
    props.getTeamMatchesCurrentLeagueThunkCreator(
      props.match.params.teamId,
      props.match.params.competitionId
    );
  }, [props.match.params.teamId, props.match.params.competitionId]);

  if(!props.matches || props.matches == 0) {
      return <Preloader/>
  }

  return (
    <div>
      <TeamLeagueMatches {...props}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  team: state.team.team,
  matches: state.team.matches,
});

let WithUrlDataTeamLeagueMatchesContainer = withRouter(
  TeamLeagueMatchesContainer
);

export default connect(mapStateToProps, {
  getTeamMatchesCurrentLeagueThunkCreator,
})(WithUrlDataTeamLeagueMatchesContainer);
