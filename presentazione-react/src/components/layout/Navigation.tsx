import { useNavigate, useLocation } from "react-router-dom";

interface NavRoute {
  path: string;
  label: string;
}

const routes: NavRoute[] = [
  { path: "/", label: "Copertina" },
  { path: "/azienda", label: "Azienda" },
  { path: "/contesto", label: "Contesto" },
  { path: "/confronto", label: "Confronto" },
  { path: "/requisiti", label: "Requisiti" },
  { path: "/stack", label: "Stack" },
  { path: "/architettura", label: "Architettura" },
  { path: "/componenti", label: "Componenti" },
  { path: "/factory", label: "Factory" },
  { path: "/cross-panel", label: "Cross Panel" },
  { path: "/permessi", label: "Permessi" },
  { path: "/risultati", label: "Risultati" },
  { path: "/criticita", label: "Criticità" },
  { path: "/futuri", label: "Sviluppi Futuri" },
  { path: "/competenze", label: "Competenze" },
  { path: "/grazie", label: "Grazie" },
];

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = routes.findIndex((r) => r.path === location.pathname);

  const goTo = (index: number) => {
    if (index >= 0 && index < routes.length) {
      navigate(routes[index].path);
    }
  };

  const handleKeyDown = (e: globalThis.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(currentIndex - 1);
    if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
      e.preventDefault();
      goTo(currentIndex + 1);
    }
    if (e.key === "Home") goTo(0);
    if (e.key === "End") goTo(routes.length - 1);
  };

  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", handleKeyDown);
    window.addEventListener("keydown", handleKeyDown);
  }

  return (
    <>
      {currentIndex > 0 && (
        <button
          className="nav-arrow prev"
          onClick={() => goTo(currentIndex - 1)}
          aria-label="Precedente"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      )}
      {currentIndex < routes.length - 1 && (
        <button
          className="nav-arrow next"
          onClick={() => goTo(currentIndex + 1)}
          aria-label="Successiva"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      )}

      <div className="nav-dots">
        {routes.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div
        className="progress-bar"
        style={{ width: `${((currentIndex + 1) / routes.length) * 100}%` }}
      />
    </>
  );
}
