import React from "react";
import s from "./leagueTable.module.css";

const TableColumn = (props) => {
  return (
    <tr>
      <td>
        {props.column.position}{" "}
        <img
          src={props.column.team.crestUrl}
          alt={""}
          className={s.teamTableIcon}
        />
      </td>

      <td>{props.column.playedGames}</td>
      <td>{props.column.won}</td>
      <td>{props.column.draw}</td>
      <td>{props.column.lost}</td>
      <td>{props.column.goalsFor}</td>
      <td>{props.column.goalsAgainst}</td>
      <td>{props.column.goalDifference}</td>
      <td>{props.column.points}</td>
      <td>{props.column.form}</td>
    </tr>
  );
};

export default TableColumn;
