import SlideLayout from "../layout/SlideLayout";
import BulletList from "../shared/BulletList";

export default function SlideRisultati() {
  return (
    <SlideLayout icon="fa-chart-line" title="Risultati Raggiunti">
      <div className="grid-2">
        <div>
          <BulletList
            gap="12px"
            items={[
              { icon: "fa-layer-group", text: "50+ pannelli funzionanti CRUD completi" },
              { icon: "fa-file-code", text: "35.000 righe di codice frontend in 3 mesi" },
              { icon: "fa-cubes", text: "Architettura basata su 3 componenti generici" },
              { icon: "fa-industry", text: "Pattern Factory per API CRUD automatiche" },
              { icon: "fa-comments", text: "Comunicazione cross-pannello via cache" },
              { icon: "fa-language", text: "Multilingua IT/EN con switch real-time" },
              { icon: "fa-sun", text: "Tema chiaro e scuro persistito" },
            ]}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgs/commits.png" alt="GitHub stats" className="img-side" />
          <p style={{ fontSize: "0.8rem", color: "#999", marginTop: 6 }}>
            Statistiche GitHub — 3 mesi di sviluppo
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
