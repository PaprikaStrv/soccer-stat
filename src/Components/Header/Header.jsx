import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/soccer_stat_logo.png";
import s from "./header.module.css";

const Header = (props) => {
  return (
    <div className={s.headerWrapper}>
     
        <div className={s.headerLogoWrapper}>
          <img src={logo} className={s.logoImgSize} alt={""} />
        </div>
     

      <div className={s.headerArticle}>
      <NavLink to={"/"} target="_blank" rel="nofollow noopener">Список лиг
      </NavLink>
        <div className={s.avaliableCompetitions}>
          Available competitions(id)
          2000,2001,2002,2003,2013,2014, 
          2015,2016,2017,2018,2019,2021
        </div>
       
      </div>
      
    </div>
  );
};

export default Header;
