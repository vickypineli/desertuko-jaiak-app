//src/components/DayCard/DayCard.jsx

import { MdChevronRight } from "react-icons/md";
import "./DayCard.scss";

export default function DayCard({ month, dayNumber, dayName, subtitle, onClick }) {
  return (
    <button className="day-card" onClick={onClick}>

      <div className="day-card__date">
        <span className="day-card__month">{month}</span>
        <span className="day-card__day">{dayNumber}</span>
      </div>

      <div className="day-card__content">
        <h2>{dayName}</h2>
        <p>{subtitle}</p>
      </div>

      <MdChevronRight className="day-card__arrow" size={24} />

    </button>
  );
}