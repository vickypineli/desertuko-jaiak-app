//src/utils/eventHelper.js
export function isEventNow(eventTime) {
  const now = new Date();

  const [hours, minutes] = eventTime.split(":").map(Number);

  const eventDate = new Date();
  eventDate.setHours(hours, minutes, 0, 0);

  const diff = now - eventDate;

  // margen de 1h (puedes ajustar)
  return diff >= 0 && diff <= 60 * 60 * 1000;
}