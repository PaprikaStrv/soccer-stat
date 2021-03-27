import React from "react";
import LeaguePage from "./LeaguePage";
import { connect } from "react-redux";
import { useEffect } from "react";
import {
  getLeaguesThunkCreator,
} from "./../../Redux/leagues-reducer";
import { withRouter } from "react-router";

const LeaguePageContainer = (props) => {
  useEffect(() => {
    props.getLeaguesThunkCreator(props.match.params.leagueId);
  }, [props.match.params.leagueId]); //зависимость?!

  if (!props.leaguesList || props.leaguesList.length === 0) {
    return <div>Loading data</div>;
  }

  return <LeaguePage {...props} />;
};

const mapStateToProps = (state) => ({
  leaguesList: state.leagues.leaguesList,
});

let WithUrlDataLeaguePageContainer = withRouter(LeaguePageContainer);

export default connect(mapStateToProps, {
  getLeaguesThunkCreator,
})(WithUrlDataLeaguePageContainer);
