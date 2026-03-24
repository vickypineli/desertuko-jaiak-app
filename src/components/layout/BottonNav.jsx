import { NavLink } from "react-router-dom";
import { MdOutlineHome, MdOutlineCalendarMonth } from "react-icons/md";
import "./BottomNav.scss";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav__links"> {/* Envolvemos los links */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bottom-nav__item active" : "bottom-nav__item"
          }
        >
          <span>
            <MdOutlineHome size={32} />
          </span>
        </NavLink>

        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            isActive ? "bottom-nav__item active" : "bottom-nav__item"
          }
        >
          <span>
            <MdOutlineCalendarMonth size={32} />
          </span>
        </NavLink>
      </div>
      <div className="bottom-nav__color-bar">
        <span className="c1" />
        <span className="c2" />
        <span className="c3" />
        <span className="c4" />
      </div>
    </nav>
  );
}
