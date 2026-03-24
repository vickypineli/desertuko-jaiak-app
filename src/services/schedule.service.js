import scheduleData from "../data/schedule.json";

export function getScheduleByLang(lang = "es") {

  return {
    festival: {
      ...scheduleData.festival,
      name: scheduleData.festival.name[lang],
      dates: scheduleData.festival.dates[lang],
    },

    days: scheduleData.days.map(day => ({
      id: day.id,
      slug: day.slug,
      date: day.date,

      label: day.weekday[lang],

      events: day.events.map(event => ({
        id: event.id,

        time: `${event.start} - ${event.end}`,

        title: event.title?.[lang] || "",
        location: event.location?.[lang] || "",
        description: event.description?.[lang] || "",

        category: event.category,

        requiresRegistration: event.requiresRegistration || false,
        registrationUrl: event.registrationUrl || null,
      }))
    }))
  };
}

