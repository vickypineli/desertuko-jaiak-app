// src/components/layout/AppLayout.jsx
import React from "react";
// Quitamos import { Outlet } from "react-router-dom"; porque no hace falta aquí
import BottomNav from "./BottonNav";
import "./AppLayout.scss"; 

export default function AppLayout({ children }) {
  return (
    <div className="page-layout">
      {/* <header className="page-layout__header">
        <h1>{title}</h1>
      </header> */}

      <main className="page-layout__content">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}