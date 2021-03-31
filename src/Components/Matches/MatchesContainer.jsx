import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLeagueMatchesThunkCreator } from "./../../Redux/matches-reducer";
import { withRouter } from 'react-router';
import Matches from "./Matches";

const MatchesContainer = (props) => {
  useEffect(() => {
    props.getLeagueMatchesThunkCreator(props.match.params.leagueId);
  }, [props.match.params.leagueId]); //зависимость?!

  if (!props.leagueMatches || props.leagueMatches.length === 0) {
    return <div>Loading data</div>;
  }

  return <Matches {...props} />;
};

const mapStateToProps = (state) => ({
  leagueMatches: state.matches.leagueMatches,
  searchResult: state.search.searchResult,
});

let WithUrlDataMatchesContainer = withRouter(MatchesContainer);

export default connect(mapStateToProps, { getLeagueMatchesThunkCreator })(
  WithUrlDataMatchesContainer
);
