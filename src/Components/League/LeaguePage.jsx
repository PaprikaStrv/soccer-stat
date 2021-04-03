import React from "react";
import MatchesContainer from "../Matches/MatchesContainer";
import SearchMatch from "../SearchMatch/SearchMatch";
import s from "./league.module.css";
import { NavLink, Switch } from "react-router-dom";
import { Route } from "react-router";
import TeamsContainer from "../Teams/TeamsContainer";
import LeagueTableContainer from "../LeagueTable/LeagueTableContainer";

const LeaguePage = (props) => {
  return (
    <div>
      {/* Проверка на наличие картинки */}
      <div className={s.leagueHeader}>
        <div className={s.leagueTitle}>
          <img
            src={props.leaguesList.emblemUrl}
            alt={""}
            className={s.leagueEmblem}
          />
          {props.leaguesList.name}
          {props.leaguesList.area.name}
         
        </div>
        <div className={s.leagueLinks}>
          <NavLink to={"/League/" + props.leaguesList.id}>
            Матчи
          </NavLink>
          <NavLink to={"/League/" + props.leaguesList.id + "/teams"}>
            Список команд
          </NavLink>
          <NavLink to={"/League/" + props.leaguesList.id + "/table"}>
            Таблица
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route
          exact
          path="/League/:leagueId"
          render={() => <MatchesContainer />}
        />
        <Route
          path="/League/:leagueId/teams"
          render={() => <TeamsContainer />}
        />
        <Route
          path="/League/:leagueId/table"
          render={() => <LeagueTableContainer/>}
        />
      </Switch>
    </div>
  );
};

export default LeaguePage;
