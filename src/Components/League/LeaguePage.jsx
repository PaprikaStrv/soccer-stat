import React from "react";
import MatchesContainer from "../Matches/MatchesContainer";
import SearchMatch from "../SearchMatch/SearchMatch";
import s from "./league.module.css";

const LeaguePage = (props) => {
  return (
    <div>
      {/* Проверка на наличие картинки */}
      <div className={s.leagueHeader}>
        <div>
          <h1>
            <img src={props.leaguesList.emblemUrl} alt={""} />
            {props.leaguesList.name}
            {props.leaguesList.area.name} - Календарь
          </h1>
        </div>
        <SearchMatch/>
      </div>

      <MatchesContainer />
    </div>
  );
};

export default LeaguePage;
