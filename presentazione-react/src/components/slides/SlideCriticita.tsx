import SlideLayout from "../layout/SlideLayout";

export default function SlideCriticita() {
  const items = [
    {
      icon: "fa-clipboard-question",
      title: "Requisiti non chiari",
      desc: "Nessuna specifica tecnica — funzionalità scoperte giorno per giorno dal software legacy",
    },
    {
      icon: "fa-plug",
      title: "Coordinamento Backend",
      desc: "API non sempre testate — formato dati variabile, correzioni last-minute",
    },
    {
      icon: "fa-industry",
      title: "Complessità di dominio",
      desc: "Processi conciari complessi: lotti, fasi concia, logistica pelli",
    },
    {
      icon: "fa-sitemap",
      title: "Sfide tecniche",
      desc: "Stato isolato per pannello, sincronizzazione cache, shortcut multi-pannello",
    },
  ];

  return (
    <SlideLayout icon="fa-triangle-exclamation" title="Criticità Riscontrate">
      <div className="grid-2">
        {items.map((item) => (
          <div className="grid-card" key={item.title}>
            <div className="card-icon">
              <i className={`fas ${item.icon}`}></i>
            </div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
