import React from 'react';
import Match from './Match';
import s from './matches.module.css';

const Matches = (props) => {
    let Matches = [];
    Matches = props.leagueMatches.matches.map((match) => (
        <Match key={match.id} match={match}/>
    ));
    return (
        <div className={s.matchesWrapper}>
           {Matches}
        </div>
    );
}

export default Matches;