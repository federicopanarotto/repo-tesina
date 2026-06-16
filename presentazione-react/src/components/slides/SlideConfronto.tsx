import SlideLayout from "../layout/SlideLayout";

export default function SlideConfronto() {
  return (
    <SlideLayout
      icon="fa-image"
      title="Vecchia vs Nuova Interfaccia"
      className=""
    >
      <div
        className="img-row"
        style={{ maxHeight: "68vh" }}
      >
        <div
          style={{
            textAlign: "center",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/imgs/vecchio-frontend-pannello-pellami.png"
            alt="Vecchia interfaccia"
            className="img-row-item"
            style={{ maxHeight: "62vh" }}
          />
          <p style={{ fontSize: "0.8rem", color: "#999", marginTop: 3 }}>
            <i className="fas fa-windows"></i> Software legacy — Windows XP
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/imgs/nuovo-fronend-pannelli-pellami-lotti.png"
            alt="Nuova interfaccia"
            className="img-row-item"
            style={{ maxHeight: "62vh" }}
          />
          <p style={{ fontSize: "0.8rem", color: "#999", marginTop: 3 }}>
            <i className="fas fa-rocket"></i> Nuovo gestionale — React + MUI
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
