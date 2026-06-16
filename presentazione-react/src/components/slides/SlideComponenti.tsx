import SlideLayout from "../layout/SlideLayout";
import GridCard from "../shared/GridCard";

export default function SlideComponenti() {
  return (
    <SlideLayout icon="fa-puzzle-piece" title="Componenti Generici Riutilizzabili">
      <div className="grid-3" style={{ marginBottom: 16 }}>
        <GridCard
          icon="fa-object-group"
          title="GenericPanel"
          description="Contenitore del pannello, layout lista + form"
        />
        <GridCard
          icon="fa-table-list"
          title="GenericList"
          description="Tabella filtrabile, ordinabile, selezione riga"
        />
        <GridCard
          icon="fa-pen-to-square"
          title="GenericForm"
          description="CRUD completo, permessi, shortcut, dialog"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          src="/imgs/lista-pannelli-dockview.png"
          alt="Lista pannelli"
          className="img-single"
        />
      </div>
    </SlideLayout>
  );
}
