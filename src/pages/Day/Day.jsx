//src/pages/Day/Day.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFestival } from "../../hooks/useFestival";
import { formatDate } from "../../utils/dateHelper";
import AppLayout from "../../components/layout/AppLayout";
import EventCard from "../../components/EventCard/EventCard";
import { isEventNow } from "../../utils/eventHelper";
import DayHeader from "../../components/layout/Header/DayHeader";
import EventModal from "../../components/EventModal/EventModal";
import { getDayBySlug, getAdjacentDays } from "../../services/calendar.service";
import "./Day.scss";

export default function DayPage() {

  const { slug } = useParams();
  const { i18n, t } = useTranslation();

  const schedule = useFestival();

  const [selectedEvent, setSelectedEvent] = useState(null);

  const day = getDayBySlug(schedule.days, slug);
  const { prevDay, nextDay } = getAdjacentDays(schedule.days, slug);

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

      <div className="events-timeline">
      {day.events.map((event, index) => (
        <EventCard
          key={event.id}
          {...event}
          index={index} // 👈 CLAVE
          isNow={isEventNow(event.time)}
          onInfoClick={() => setSelectedEvent(event)}
        />
      ))}
      </div>

      <EventModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

    </AppLayout>
  );
}
