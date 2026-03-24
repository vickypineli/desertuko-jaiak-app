//src/utils/dateHelper.js

const monthsES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const monthsEU = [
  "urtarrila",
  "otsaila",
  "martxoa",
  "apirila",
  "maiatza",
  "ekaina",
  "uztaila",
  "abuztua",
  "iraila",
  "urria",
  "azaroa",
  "abendua",
];

export function formatDate(dateString, lang) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  // Euskera
  if (lang === "eu") {
    return `${year}ko ${monthsEU[month]}ren ${day}a`;
  }

  // Español
  return `${day} de ${monthsES[month]} de ${year}`;
}

//helper con el mes mas corto para cards.

export function formatShortDate(dateString, lang) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth();

  if (lang === "eu") {
    return `${monthsEU[month].slice(0, 3)} ${day}`;
  }

  return `${day} ${monthsES[month].slice(0, 3)}`;
}
export function sortEventsByTime(events) {
  return [...events].sort((a, b) => {
    const timeA = a.time.split(" - ")[0];
    const timeB = b.time.split(" - ")[0];

    return timeA.localeCompare(timeB);
  });
}

export function formatFestivalDates(days, lang) {
  if (!days || days.length === 0) return "";

  const first = new Date(days[0].date);
  const last = new Date(days[days.length - 1].date);

  const firstDay = first.getDate();
  const lastDay = last.getDate();

  const month = first.getMonth();
  const year = first.getFullYear();

  const monthsES = [
    "enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","septiembre","octubre","noviembre","diciembre"
  ];

  const monthsEU = [
    "urtarrila","otsaila","martxoa","apirila","maiatza","ekaina",
    "uztaila","abuztua","iraila","urria","azaroa","abendua"
  ];

  if (lang === "eu") {
    return `${year}ko ${monthsEU[month]}ren ${firstDay}-${lastDay}`;
  }

  return `${firstDay}-${lastDay} de ${monthsES[month]} ${year}`;
}