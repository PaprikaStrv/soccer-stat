import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTeamsThunkCreator } from "../../Redux/teams-reducer";
import { withRouter } from 'react-router';
import Teams from "./Teams";


const TeamsContainer = (props) => {
  useEffect(() => {
    props.getTeamsThunkCreator(parseInt(props.match.params.leagueId, 10), props.searchResult);
  }, [props.match.params.leagueId, props.searchResult]); //зависимость?!

  if (!props.teamsList || props.teamsList.length === 0) {
    return <div>Loading data</div>;
  }

  return <Teams {...props} />;
};

const mapStateToProps = (state) => ({
  teamsList: state.teams.teamsList,
  leaguesList: state.leagues.leaguesList,
  searchResult: state.search.searchResult,
});

let WithUrlDataTeamsContainer = withRouter(TeamsContainer);

export default connect(mapStateToProps, { getTeamsThunkCreator })(
  WithUrlDataTeamsContainer
);
