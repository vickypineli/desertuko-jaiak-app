//src/pages/Schedule/Schedule.jsx


import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/layout/AppLayout";
import Header from "../../components/layout/Header/Header";
import { formatFestivalDates } from "../../utils/dateHelper";
import DayCard from "../../components/DayCard/DayCard";
import { useFestival } from "../../hooks/useFestival";

export default function Schedule() {

  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const schedule = useFestival();
  const festivalDates = formatFestivalDates(schedule.days, i18n.language);

  return (
    <AppLayout>

      <Header
        titleLeft={t("festivalName")}
        titleRight={t("festivalSubName")}
        //subtitle={t("scheduleSubtitle")}
        dates={festivalDates}
      />

      <div className="dayList">

        {schedule.days.map((day) => {

          const date = new Date(day.date);

          const month = date.toLocaleDateString(i18n.language, { month: "short" });
          const dayNumber = date.getDate();

          return (
          <DayCard
            key={day.slug}
            month={month}
            dayNumber={dayNumber}
            dayName={day.label}
            subtitle="Programa del día"
            onClick={() => navigate(`/day/${day.slug}`)}
          />
          );

        })}

      </div>

    </AppLayout>
  );
}