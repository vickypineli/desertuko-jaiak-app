//src/utils/eventHelper.js
// export function isEventNow(start, end, marginMinutes = 60, nowTimestamp = Date.now()) {
//   if (!start || !end) return false;

//   const now = new Date(nowTimestamp);
//   const startDate = new Date(start);
//   const endDate = new Date(end);

//   const marginMs = marginMinutes * 60 * 1000;

//   return (
//     now >= startDate &&
//     now <= new Date(endDate.getTime() + marginMs)
//   );
// }

export function isEventNow(start, end, marginMinutes = 60, now = Date.now()) {
  if (!start) return false;

  const startDate = new Date(start);
  const endDate = end ? new Date(end) : null;

  const nowDate = new Date(now);

  // margen hacia atrás
  const startWithMargin = new Date(startDate.getTime() - marginMinutes * 60000);

  if (endDate) {
    return nowDate >= startWithMargin && nowDate <= endDate;
  }

  return nowDate >= startWithMargin;
}

export function getRemainingTime(endTime, now = Date.now()) {
  if (!endTime) return null;

  const end = new Date(endTime); // ✅ parse directo ISO
  const nowDate = new Date(now);

  const diff = end.getTime() - nowDate.getTime();

  if (isNaN(diff) || diff <= 0) return null;

  return Math.floor(diff / 60000);
}
