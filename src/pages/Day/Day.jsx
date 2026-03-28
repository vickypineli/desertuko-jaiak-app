//src/pages/Day/Day.jsx

import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFestival } from "../../hooks/useFestival";
import { formatDate } from "../../utils/dateHelper";
import AppLayout from "../../components/layout/AppLayout";
import EventCard from "../../components/EventCard/EventCard";
import { isEventNow, getRemainingTime } from "../../utils/eventHelper";
import DayHeader from "../../components/layout/Header/DayHeader";
import EventModal from "../../components/EventModal/EventModal";
import { getDayBySlug, getAdjacentDays } from "../../services/calendar.service";
import "./Day.scss";

export default function DayPage() {

  const { slug } = useParams();
  const { i18n, t } = useTranslation();

  const schedule = useFestival();

  const [selectedEvent, setSelectedEvent] = useState(null);

  // ✅ tiempo reactivo (bien hecho)
  const [now, setNow] = useState(() => Date.now());

  // ✅ refs SIEMPRE arriba
  const activeEventRef = useRef(null);
  const prevActiveIndex = useRef(null);

  // ✅ actualizar cada minuto
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const day = getDayBySlug(schedule.days, slug);
  const { prevDay, nextDay } = getAdjacentDays(schedule.days, slug);

  // ✅ detectar evento activo
  const activeIndex =
    day?.events?.findIndex(event =>
      isEventNow(event.start, event.end, 60, now)
    ) ?? -1;

  // ✅ scroll SOLO cuando cambia evento activo
  useEffect(() => {
    if (activeIndex !== prevActiveIndex.current) {

      if (activeIndex !== -1 && activeEventRef.current) {
        activeEventRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }

      prevActiveIndex.current = activeIndex;
    }
  }, [activeIndex]);

  // ✅ control de error
  if (!day) {
    return (
      <AppLayout title="Día no encontrado">
        <p>No se ha encontrado el día.</p>
      </AppLayout>
    );
  }

  return (
    <AppLayout title={day.label}>

      <DayHeader
        date={formatDate(day.date, i18n.language)}
        day={day.label}
        prevSlug={prevDay?.slug}
        nextSlug={nextDay?.slug}
      />

      <h2 className="day-page__events-title">{t("eventsDay")}</h2>

      {/* 🔥 STICKY EVENT */}
      {/* {activeIndex !== -1 && (
        <div className="event-sticky">
          <EventCard
            {...day.events[activeIndex]}
            isNow={true}
            index={0}
            remainingTime={getRemainingTime(
              day.events[activeIndex].end,
              now
            )}
            onInfoClick={() =>
              setSelectedEvent(day.events[activeIndex])
            }
          />
        </div>
      )} */}

      <div className="events-timeline">

        {day.events.map((event, index) => {
          const isNowEvent = isEventNow(
            event.start,
            event.end,
            60,
            now
          );

          const remaining = isNowEvent
            ? getRemainingTime(event.end, now)
            : null;

          return (
            <div
              key={event.id}
              ref={index === activeIndex ? activeEventRef : null}
            >
              <EventCard
                {...event}
                index={index}
                isNow={isNowEvent}
                remainingTime={remaining}
                onInfoClick={() => setSelectedEvent(event)}
              />
            </div>
          );
        })}

      </div>

      <EventModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

    </AppLayout>
  );
}