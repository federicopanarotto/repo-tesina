import SlideLayout from "../layout/SlideLayout";

export default function SlideAzienda() {
  return (
    <SlideLayout icon="fa-building" title="NetEvolution">
      <div className="grid-2" style={{ alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.6, marginBottom: 16 }}>
            <strong>NetEvolution</strong> è un'agenzia di <strong>web marketing</strong> e{" "}
            <strong>sviluppo software</strong> con sede ad Arzignano (VI), nel cuore del distretto
            conciario vicentino.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
            L'azienda opera nel settore delle tecnologie digitali offrendo servizi che spaziano dalla
            progettazione e realizzazione di applicazioni web su misura alla consulenza in ambito
            marketing digitale.
          </p>
          <div
            style={{
              marginTop: 20,
              padding: "12px 16px",
              background: "#e8eaf6",
              borderRadius: 8,
              fontSize: "0.9rem",
              color: "var(--primary-dark)",
            }}
          >
            <i className="fas fa-users" style={{ marginRight: 8 }}></i>
            Team giovane e dinamico — assenza di figure senior — ampia autonomia decisionale
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/imgs/netevolution-logo-2.png"
            alt="NetEvolution"
            style={{
              maxWidth: "85%",
              maxHeight: "28vh",
              borderRadius: 8,
              border: "1px solid var(--border)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          />
          <p style={{ fontSize: "0.85rem", color: "#999", marginTop: 12 }}>
            <i className="fas fa-map-pin"></i> Arzignano (VI) — Distretto conciario
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
