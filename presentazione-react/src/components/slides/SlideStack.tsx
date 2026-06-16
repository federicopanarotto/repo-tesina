import SlideLayout from "../layout/SlideLayout";
import GridCard from "../shared/GridCard";

const techs = [
  { icon: "fa-brands fa-react", title: "React 19", desc: "Framework UI con ecosistema ricco" },
  { icon: "fa-file-code", title: "TypeScript 5.9", desc: "Tipizzazione strict mode per robustezza" },
  { icon: "fa-bolt", title: "Vite 7", desc: "Build tool veloce e moderno" },
  { icon: "fa-palette", title: "Material-UI 7", desc: "Componenti UI, tema chiaro/scuro" },
  { icon: "fa-table-cells-large", title: "Dockview 5", desc: "Architettura a pannelli modulari" },
  { icon: "fa-database", title: "TanStack Query 5", desc: "Stato server, caching intelligente" },
  { icon: "fa-circle-nodes", title: "Zustand 5", desc: "Stato locale isolato per pannello" },
  { icon: "fa-wpforms", title: "react-hook-form", desc: "Gestione form complessi" },
  { icon: "fa-table", title: "material-react-table", desc: "Tabelle filtrabili e ordinabili" },
];

export default function SlideStack() {
  return (
    <SlideLayout icon="fa-layer-group" title="Stack Tecnologico">
      <div className="grid-3">
        {techs.map((t) => (
          <GridCard key={t.title} icon={t.icon} title={t.title} description={t.desc} />
        ))}
      </div>
    </SlideLayout>
  );
}
