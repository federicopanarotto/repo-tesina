import SlideLayout from "../layout/SlideLayout";

export default function SlideArchitettura() {
  return (
    <SlideLayout icon="fa-cubes" title="Architettura del Frontend">
      <div className="grid-2">
        <div>
          <h3 style={{ fontSize: "0.95rem", marginBottom: 8, color: "var(--primary)" }}>
            Feature-Sliced Pattern
          </h3>
          <pre
            style={{
              background: "#f5f5f5",
              padding: 14,
              borderRadius: 8,
              fontSize: "0.7rem",
              lineHeight: 1.5,
              borderLeft: "3px solid var(--primary)",
            }}
          >
{`src/
  apps/default/      Entry point
  features/
    auth/            Login, OTP, logout
    panels/          Tutti i pannelli dockview
    routing/         Route e guard
    search/          Ricerca globale
    user/            Gestione utenti e ruoli
  shared/
    api/             Layer API (axios, query keys)
    ui/              Componenti riusabili
    themes/          Tema chiaro / scuro
    interfaces/      TypeScript interfaces`}
          </pre>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src="/imgs/architettura-pannelli-dockview.png"
            alt="Architettura pannelli"
            className="img-side"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
