//src/services/scheduleAdapter.js

export function adaptSchedule(data, lang) {
  return {
    ...data,
    days: data.days.map((day) => ({
      ...day,
      weekday: day.weekday[lang],
      events: day.events.map((event) => ({
        ...event,
        title: event.title[lang],
        location: event.location[lang],
      })),
    })),
  };
}