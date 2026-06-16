import SlideLayout from "../layout/SlideLayout";
import BulletList from "../shared/BulletList";

export default function SlideCrossPanel() {
  return (
    <SlideLayout icon="fa-arrow-right-arrow-left" title="Comunicazione Cross-Pannello">
      <div className="grid-2">
        <div>
          <BulletList
            gap="10px"
            items={[
              { icon: "fa-comment-dots", text: "Selezione contatto inesistente → apertura pannello creazione" },
              { icon: "fa-retweet", text: "Cache React Query come bus di comunicazione" },
              { icon: "fa-key", text: "Query key speciale LAST_CREATED" },
              { icon: "fa-eye", text: "useSubscribePanel sottoscrive i cambiamenti" },
              { icon: "fa-puzzle-piece", text: "Nessun accoppiamento diretto tra pannelli" },
            ]}
          />
          <div style={{ marginTop: 16 }}>
            <span className="tag">
              <i className="fas fa-keyboard" style={{ marginRight: 4 }}></i> Shortcut
            </span>
            <span className="tag" style={{ marginLeft: 6 }}>F4 = Modifica</span>
            <span className="tag" style={{ marginLeft: 6 }}>F9 = Crea</span>
            <span className="tag" style={{ marginLeft: 6 }}>F10 = Salva</span>
            <span className="tag" style={{ marginLeft: 6 }}>Esc = Annulla</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/imgs/nuovo-frontend-pannelli-ordini-clienti.png"
            alt="Cross-panel"
            className="img-side"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
