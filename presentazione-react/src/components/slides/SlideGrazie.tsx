export default function SlideGrazie() {
  return (
    <div className="slide slide-thanks">
      <div className="slide-inner">
        <div className="thanks-icon">
          <i className="fas fa-handshake"></i>
        </div>
        <h1>Grazie per l'attenzione</h1>
        <p>Domande?</p>
        <div
          style={{
            marginTop: 30,
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
            fontSize: "0.9rem",
            opacity: 0.7,
          }}
        >
          <span>
            <i className="fas fa-user"></i> Federico Panarotto
          </span>
          <span>
            <i className="fas fa-code"></i> Web Developer Full Stack
          </span>
          <span>
            <i className="fas fa-graduation-cap"></i> ITS Digital Academy Mario Volpato
          </span>
        </div>
      </div>
    </div>
  );
}
