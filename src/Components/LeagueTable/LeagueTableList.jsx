import React from "react";
import LeagueTable from "./LeagueTable";
import s from "./leagueTable.module.css";
import SeasonDateFilter from './../SeasonDateFilter/SeasonDateFilter';

const LeagueTableList = (props) => {
  let groups = [];
  groups = props.leagueTable.standings.map((standing) => {
    if (standing.type === "TOTAL") {
      return <LeagueTable key={standing.group} standing={standing} />;
    }
  });

  return (
    <div>
      <div><SeasonDateFilter/></div>
      {groups}
    </div>
  );
};

export default LeagueTableList;
