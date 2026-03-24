import { useTranslation } from "react-i18next";
import { getScheduleByLang } from "../services/schedule.service";

export function useFestival() {
  const { i18n } = useTranslation();
  return getScheduleByLang(i18n.language);
}