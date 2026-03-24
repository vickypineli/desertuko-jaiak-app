// src/router/index.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageSelectorPage from "../pages/Language/LanguageSelectorPage";
import Schedule from "../pages/Schedule/Schedule";
import Day from "../pages/Day/Day";
import PublicLayout from "../components/layout/PublicLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas con su layout */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LanguageSelectorPage />} />
        </Route>

        {/* Rutas de la app (el AppLayout ya está dentro de cada página) */}
        <Route path="schedule" element={<Schedule />} />
        <Route path="day/:slug" element={<Day />} />
      </Routes>
    </BrowserRouter>
  );
}