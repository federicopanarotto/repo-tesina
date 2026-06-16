import SlideLayout from "../layout/SlideLayout";
import BulletList from "../shared/BulletList";

export default function SlidePermessi() {
  return (
    <SlideLayout icon="fa-user-shield" title="Sistema di Permessi e Autenticazione">
      <div className="grid-2">
        <div>
          <h3 style={{ fontSize: "0.95rem", marginBottom: 8, color: "var(--primary)" }}>
            Tre livelli di verifica
          </h3>
          <BulletList
            gap="10px"
            items={[
              { icon: "fa-cube", text: "Componente — Visibilità pulsanti e sezioni" },
              { icon: "fa-hook", text: "Hook — Verifica prima di eseguire operazioni" },
              { icon: "fa-engine", text: "Engine — Controllo centralizzato policy" },
            ]}
          />
          <div
            style={{
              marginTop: 14,
              padding: 12,
              background: "#e8f5e9",
              borderRadius: 8,
              borderLeft: "3px solid #2e7d32",
              fontSize: "0.9rem",
            }}
          >
            <i className="fas fa-check-circle" style={{ color: "#2e7d32" }}></i>{" "}
            Login + OTP opzionale · Gruppi Admin/Staff · Risorse granulari
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/imgs/nuovo-frontend-pannelli-utente-permessi.png"
            alt="Permessi"
            className="img-side"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
