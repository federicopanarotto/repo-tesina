import SlideLayout from "../layout/SlideLayout";
import BulletList from "../shared/BulletList";

export default function SlideRequisiti() {
  return (
    <SlideLayout icon="fa-clipboard-list" title="Requisiti del Progetto">
      <div className="grid-2" style={{ flex: 1 }}>
        <div>
          <h3 style={{ fontSize: "0.95rem", marginBottom: 8, color: "var(--primary)" }}>
            <i className="fas fa-cog"></i> Funzionali
          </h3>
          <BulletList
            gap="6px"
            items={[
              { icon: "fa-address-book", text: "Anagrafiche: contatti, fornitori, agenti" },
              { icon: "fa-cow", text: "Pellami: specie, origini, tipologie, stadi concia" },
              { icon: "fa-tag", text: "Articoli: tipologie, colori, classi, stampe" },
              { icon: "fa-file-invoice", text: "Ordini cliente e righe d'ordine" },
              { icon: "fa-boxes", text: "Lotti produzione: composizione, movimenti" },
              { icon: "fa-truck", text: "DDT e righe di trasporto" },
              { icon: "fa-warehouse", text: "Magazzino: partite, movimenti, pallet" },
              { icon: "fa-chart-bar", text: "Analisi dati: vendite, lotti, movimenti" },
              { icon: "fa-user-shield", text: "Utenti, gruppi, permessi resource-action" },
            ]}
          />
        </div>
        <div>
          <h3 style={{ fontSize: "0.95rem", marginBottom: 8, color: "var(--primary)" }}>
            <i className="fas fa-sliders"></i> Non Funzionali
          </h3>
          <BulletList
            gap="6px"
            items={[
              { icon: "fa-puzzle-piece", text: "Pannelli modulari apribili simultaneamente" },
              { icon: "fa-bolt", text: "Bassa latenza e reattività" },
              { icon: "fa-language", text: "Multilingua: italiano / inglese" },
              { icon: "fa-sun", text: "Tema chiaro e scuro personalizzabile" },
              { icon: "fa-keyboard", text: "Scorciatoie da tastiera (F4, F9, F10, Esc)" },
              { icon: "fa-shield-halved", text: "Autenticazione robusta con OTP" },
              { icon: "fa-universal-access", text: "UX moderna, chiara e intuitiva" },
            ]}
          />
        </div>
      </div>
    </SlideLayout>
  );
}
