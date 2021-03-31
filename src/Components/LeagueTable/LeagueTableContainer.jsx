import React from 'react';
import { connect } from 'react-redux';
import {  getLeagueTableThunkCreator } from "./../../Redux/leagueTable-reducer";
import { useEffect } from 'react';
import { withRouter } from 'react-router';
import LeagueTableList from './LeagueTableList';

const LeagueTableContainer = (props) => {
    useEffect(() => {
        props.getLeagueTableThunkCreator(props.match.params.leagueId, props.seasonDate)
    }, [props.match.params.leagueId, props.seasonDate])

    if (!props.leagueTable || props.leagueTable.length === 0) {
        return <div>Loading data</div>;
      }
    return (
        <div>
            <LeagueTableList {...props}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    leagueTable: state.leagueTable.table,
    seasonDate: state.search.searchResult
});

let WithUrlDataLeagueTableContainer = withRouter(LeagueTableContainer);

export default connect(mapStateToProps, { getLeagueTableThunkCreator } )(WithUrlDataLeagueTableContainer);