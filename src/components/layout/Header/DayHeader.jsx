//src/components/layout/Header/DayHeader.jsx
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "./DayHeader.scss";

export default function DayHeader({ date, day, prevSlug, nextSlug }) {
  const navigate = useNavigate();

  return (
    <header className="day-header">
      <div className="day-header__container">

        {/* PREVIOUS DAY */}
        <button
          className="day-header__button"
          disabled={!prevSlug}
          onClick={() => navigate(`/day/${prevSlug}`)}
        >
          <span className="day-header__button-icon">
            <MdArrowBackIos size={24} />
          </span>
        </button>
        {/* TITLE */}
        <div className="day-header__title">
          <h1>{day}</h1>
          <p>{date}</p>
        </div>

        {/* NEXT DAY */}
        <button
          className="day-header__button"
          disabled={!nextSlug}
          onClick={() => navigate(`/day/${nextSlug}`)}
        >
          <span className="day-header__button-icon">
            <MdArrowForwardIos size={24} />
          </span>
        </button>

      </div>
    </header>
  );
}