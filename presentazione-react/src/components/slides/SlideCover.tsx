import SlideLogo from "../layout/SlideLogo";

export default function SlideCover() {
  return (
    <div className="slide slide-cover">
      <div className="slide-inner">
        <div className="cover-badge">
          <i className="fas fa-graduation-cap" style={{ marginRight: 8 }}></i>{" "}
          Project Work — Biennio 2024/2026
        </div>
        <h1>
          Sviluppo Software Gestionale<br />
          Conceria a Pannelli Modulari
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            opacity: 0.95,
            margin: "8px 0 14px",
            letterSpacing: 1,
          }}
        >
          Studente Federico Panarotto
        </p>

        <div className="cover-details">
          {[
            {
              label: "Area Tecnologica",
              value:
                "Tecnologie dell'informazione, della comunicazione e dei dati",
            },
            {
              label: "Ambito",
              value:
                "6.1 Metodi e tecnologie per lo sviluppo di sistemi software",
            },
            {
              label: "Figura Professionale",
              value:
                "Tecnico Superiore per i Metodi e le Tecnologie per lo Sviluppo di Sistemi Software",
            },
            {
              label: "Titolo Percorso",
              value: "Web Developer Full Stack (Vicenza)",
            },
            { label: "Codice Corso", value: "7346-0005-803-2024" },
          ].map((d) => (
            <div className="cover-detail-row" key={d.label}>
              <span className="cover-detail-label">{d.label}</span>
              <span className="cover-detail-value">{d.value}</span>
            </div>
          ))}
        </div>

        <div className="cover-divider"></div>

        <div className="cover-logo">
          <img src="/imgs/loghi-its.jpg" alt="ITS Digital Academy" />
        </div>
      </div>
      <SlideLogo />
    </div>
  );
}
