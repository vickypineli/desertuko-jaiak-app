// src/components/layout/PublicLayout.jsx
import { Outlet } from "react-router-dom";
export default function PublicLayout() {
  return (
    <div className="page-layout">

      <main className="page-layout__content">
        <Outlet />
      </main>

      <footer className="page-layout__footer">
        Desertuko Jai Batzordea ©
      </footer>

      <div className="page-layout__color-bar">
        <span className="c1" />
        <span className="c2" />
        <span className="c3" />
        <span className="c4" />
      </div>
    </div>
  );
}