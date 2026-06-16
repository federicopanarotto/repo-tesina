import SlideLayout from "../layout/SlideLayout";
import BulletList from "../shared/BulletList";

export default function SlideCompetenze() {
  return (
    <SlideLayout icon="fa-flag-checkered" title="Competenze Acquisite">
      <div className="grid-3">
        <div>
          <h3 style={{ fontSize: "0.95rem", marginBottom: 8, color: "var(--primary)" }}>
            <i className="fas fa-code"></i> Tecniche
          </h3>
          <BulletList
            gap="6px"
            items={[
              { icon: "fa-brands fa-react", text: "React 19 avanzato" },
              { icon: "fa-file-code", text: "TypeScript strict mode" },
              { icon: "fa-database", text: "TanStack Query + Zustand" },
              { icon: "fa-palette", text: "MUI 7 temi personalizzati" },
              { icon: "fa-table-cells-large", text: "Dockview modulare" },
              { icon: "fa-wpforms", text: "react-hook-form" },
              { icon: "fa-language", text: "i18next" },
            ]}
          />
        </div>
        <div>
          <h3 style={{ fontSize: "0.95rem", marginBottom: 8, color: "var(--primary)" }}>
            <i className="fas fa-diagram-project"></i> Metodologiche
          </h3>
          <BulletList
            gap="6px"
            items={[
              { icon: "fa-cubes", text: "Architetture modulari" },
              { icon: "fa-industry", text: "Pattern Factory Method" },
              { icon: "fa-puzzle-piece", text: "Feature-sliced design" },
              { icon: "fa-comments", text: "Coordinamento team ridotto" },
              { icon: "fa-code-branch", text: "Git workflow" },
            ]}
          />
        </div>
        <div>
          <h3 style={{ fontSize: "0.95rem", marginBottom: 8, color: "var(--primary)" }}>
            <i className="fas fa-people-group"></i> Soft Skill
          </h3>
          <BulletList
            gap="6px"
            items={[
              { icon: "fa-lightbulb", text: "Autonomia decisionale" },
              { icon: "fa-wrench", text: "Problem-solving su requisiti aperti" },
              { icon: "fa-comments", text: "Comunicazione stakeholder" },
              { icon: "fa-clock", text: "Gestione priorità reali" },
            ]}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: 12,
          padding: "10px 16px",
          background: "#e8eaf6",
          borderRadius: 8,
          textAlign: "center",
          fontSize: "0.9rem",
          color: "var(--primary-dark)",
        }}
      >
        <i className="fas fa-quote-left" style={{ marginRight: 6, opacity: 0.6 }}></i>
        Un progetto reale, utilizzato da utenti reali, che ha sostituito un sistema obsoleto con una
        soluzione moderna
        <i className="fas fa-quote-right" style={{ marginLeft: 6, opacity: 0.6 }}></i>
      </div>
    </SlideLayout>
  );
}
