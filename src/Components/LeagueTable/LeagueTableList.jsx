import React from "react";
import LeagueTable from "./LeagueTable";

const LeagueTableList = (props) => {
  let groups = [];
  groups = props.leagueTable.standings.map((standing) => {
    if (standing.type === "TOTAL") {
      return <LeagueTable key={standing.group} standing={standing}/>
    }
   
});

  return <div>{groups}</div>;
};

export default LeagueTableList;
