import React from "react";
import s from "./leagueTable.module.css";
import TableColumn from "./TableColumn";

const LeagueTable = (props) => {
  let columns = [];
  columns = props.standing.table.map((columns) => (
     <TableColumn key={columns.position} column={columns} />
  ));

  return (
    <div>
      {props.standing.group}
      <table>
        <tbody>
          <tr>
            <th className={s.test}>Клуб</th>
            <th>И</th>
            <th>В</th>
            <th>Н</th>
            <th>П</th>
            <th>ЗМ</th>
            <th>ПМ</th>
            <th>РМ</th>
            <th>О</th>
            <th>Последние 5</th>
          </tr>
          {columns}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;
