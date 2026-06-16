import SlideLayout from "../layout/SlideLayout";
import BulletList from "../shared/BulletList";

export default function SlideContesto() {
  return (
    <SlideLayout icon="fa-bullseye" title="Contesto e Obiettivi">
      <div className="grid-2">
        <div>
          <h3 style={{ fontSize: "1rem", marginBottom: 10, color: "var(--primary)" }}>
            <i className="fas fa-triangle-exclamation"></i> Il problema
          </h3>
          <BulletList
            gap="10px"
            items={[
              { icon: "fa-clock", text: "Software legacy con oltre 20 anni di anzianità" },
              { icon: "fa-bug", text: "Lentezza operativa e vulnerabilità di sicurezza" },
              { icon: "fa-window-maximize", text: "Interfaccia Windows XP — datata e poco performante" },
              { icon: "fa-tools", text: "Manutenzione complessa e costosa" },
            ]}
          />
        </div>
        <div>
          <h3 style={{ fontSize: "1rem", marginBottom: 10, color: "var(--primary)" }}>
            <i className="fas fa-check-circle"></i> La soluzione
          </h3>
          <BulletList
            gap="10px"
            items={[
              { icon: "fa-globe", text: "Applicazione web-based moderna e veloce" },
              { icon: "fa-puzzle-piece", text: "Interfaccia a pannelli modulari" },
              { icon: "fa-shield", text: "Autenticazione a due fattori + permessi granulari" },
              { icon: "fa-users", text: "Stessa logica operativa — curva di apprendimento zero" },
            ]}
          />
        </div>
      </div>
    </SlideLayout>
  );
}
