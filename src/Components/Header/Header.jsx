import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/soccer_stat_logo.png";
import SearchLeague from "../SearchLeague/SearchLeague";
import s from "./header.module.css";

const Header = (props) => {
  return (
    <div className={s.headerWrapper}>
      <NavLink to={"/"}>
        <div className={s.headerLogoWrapper}>
          <img src={logo} className={s.logoImgSize} alt={""} />
        </div>
      </NavLink>

      <div className={s.headerArticle}>
        <div className={s.avaliableCompetitions}>
          Available competitions(id)
          2000,2001,2002,2003,2013,2014, 
          2015,2016,2017,2018,2019,2021
        </div>
        <SearchLeague />
      </div>
    </div>
  );
};

export default Header;
