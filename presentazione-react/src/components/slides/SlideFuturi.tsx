import SlideLayout from "../layout/SlideLayout";

export default function SlideFuturi() {
  const items = [
    { icon: "fa-vial", title: "Test Automatici", desc: "Unit, integration, E2E per robustezza" },
    { icon: "fa-robot", title: "AI Assistant", desc: "Chat basata su AI per CRUD in linguaggio naturale" },
    { icon: "fa-gauge-high", title: "Performance", desc: "Virtual scrolling, lazy loading, query ottimizzate" },
    { icon: "fa-sliders", title: "Personalizzazione", desc: "Layout salvabili, dashboard con widget" },
    { icon: "fa-chart-pie", title: "Reportistica", desc: "Dashboard analitiche avanzate" },
    { icon: "fa-cart-shopping", title: "E-commerce", desc: "Integrazione vendita diretta prodotti" },
    { icon: "fa-book", title: "Contabilità", desc: "Modulo contabile integrato" },
    { icon: "fa-mobile-screen", title: "Mobile", desc: "App nativa o PWA per operatori" },
  ];

  return (
    <SlideLayout icon="fa-lightbulb" title="Sviluppi Futuri">
      <div className="grid-4">
        {items.map((item) => (
          <div className="grid-card" style={{ textAlign: "center" }} key={item.title}>
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
