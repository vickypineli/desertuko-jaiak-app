//src/services/calendar.service.js

export function getDayBySlug(days, slug) {
  return days.find((day) => day.slug === slug);
}

export function getDayIndex(days, slug) {
  return days.findIndex((day) => day.slug === slug);
}

export function getAdjacentDays(days, slug) {
  const index = getDayIndex(days, slug);

  return {
    prevDay: days[index - 1],
    nextDay: days[index + 1],
  };
}