import React from 'react';
import TeamInfo from './TeamInfo';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { useEffect } from 'react';
import { getCurrentTeamThunkCreator } from './../../Redux/team-reducer';

const TeamInfoContainer = (props) => {
    useEffect(() => {
        props.getCurrentTeamThunkCreator(props.match.params.teamId);
    }, [props.match.params.teamId]);

    if (!props.team || props.team.length === 0) {
        return <div>Loading data</div>;
    }

    return (
        <TeamInfo {...props}/>
    );
}

const mapStateToProps = (state) => ({
    team: state.team.team,
});

let  WithUrlDataTeamInfoContainer = withRouter(TeamInfoContainer);

export default connect(mapStateToProps, {getCurrentTeamThunkCreator} )(WithUrlDataTeamInfoContainer);