//src/components/layout/Header/Header.jsx
import React from "react";
import { MdOutlineCelebration, MdOutlineCalendarMonth } from "react-icons/md";
import "./Header.scss";
export default function Header({
  titleLeft,
  titleRight,
  //subtitle,
  dates,
}) {  
  return (
    <header className="festival-header">

      {/* <div className="festival-header__blob festival-header__blob--top" />
      <div className="festival-header__blob festival-header__blob--bottom" /> */}

      <div className="festival-header__content">

        <div className="festival-header__title-row">
          <span className="material-icons-round festival-header__icon">
            <MdOutlineCelebration size={32} />
          </span>

          <h1 className="festival-header__title">
            <span className="primary">{titleLeft}</span>{" "}
            <span className="secondary">{titleRight}</span>
          </h1>
        </div>

        {/* <p className="festival-header__subtitle">{subtitle}</p> */}
        {/* <p className="festival-header__subtitle2">{subtitle2}</p> */}

        <div className="festival-header__dates">
          {/* <span className="material-icons-round">
            <MdOutlineCalendarMonth size={24} />
          </span> */}
          <span>{dates}</span>
        </div>

      </div>
    </header>
  );
}