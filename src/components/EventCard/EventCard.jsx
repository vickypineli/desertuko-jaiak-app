//src/components/EventCard/EventCard.jsx
import { useState } from "react";
import "./EventCard.scss";
import {
  FaMusic,
  FaUtensils,
  FaChild,
  FaFutbol,
  FaDice,
  FaStar,
  FaHeart,
  FaCalendar
} from "react-icons/fa";

import { BiSolidDrink } from "react-icons/bi";
import { TbKayak } from "react-icons/tb";
import { LuNotebookPen } from "react-icons/lu";
import { GiStrikingBalls, GiBullHorns, GiBullseye } from "react-icons/gi";
import { TbOld } from "react-icons/tb";
import { BsInfoCircleFill } from "react-icons/bs";


const icons = {
  conciertos: FaMusic,
  musica: FaMusic,
  gastronomia: FaUtensils,
  bebidas: BiSolidDrink,
  infantil: FaChild,
  deporte: FaFutbol,
  juegos: FaDice,
  dardos: GiBullseye,
  popular: FaStar,
  fuego: GiBullHorns,
  mayores: TbOld,
  solidario: FaHeart,
  bingo: GiStrikingBalls,
  deporteAcuatico: TbKayak,
};


export default function EventCard({
  time,
  title,
  location,
  category,
  registrationUrl,
  requiresRegistration,
  onInfoClick,
  index,
  isNow
}) {
  const [showInfoTip, setShowInfoTip] = useState(false);
  const [showRegisterTip, setShowRegisterTip] = useState(false);
  const Icon = icons[category] || FaCalendar;

  return (
    <>
      <div className={`event-card fade-in ${isNow ? "event-card--now" : ""}`} style={{ animationDelay: `${index * 80}ms` }}>

        <div className={`event-card__icon event-card__icon--${category}`}>
          <Icon size={20} />
        </div>

        <div className="event-card__content">

          <div className="event-card__meta">
            <span className="event-card__time">{time}</span>
            <span className="event-card__dot"></span>
            <span className="event-card__location">{location}</span>
            <span className="event-card__dot"></span>

          {/* REGISTRATION */}
        {requiresRegistration && registrationUrl && (
          <div className="event-card__register-wrapper">
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="event-card__register"
              onClick={() => {
                setShowRegisterTip(true);
                setTimeout(() => setShowRegisterTip(false), 1500);
              }}
            >
              <LuNotebookPen size={16} />
            </a>

            {showRegisterTip && (
              <span className="event-card__tooltip">
                Inscripción previa
              </span>
            )}
          </div>
        )}
          </div>

          <h3 className="event-card__title">{title}</h3>

        </div>

        <div className="event-card__actions">

          {/* INFO */}
          <button
            className="event-card__info"
            onClick={() => {
              setShowInfoTip(true);
              setTimeout(() => setShowInfoTip(false), 1500);
              onInfoClick();
            }}
          >
            <BsInfoCircleFill size={20} />
          </button>

          {showInfoTip && (
            <span className="event-card__tooltip">Info</span>
          )}

        </div>

      </div>
    </>
  );
}