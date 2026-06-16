import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SlideCover from "../components/slides/SlideCover";
import SlideAzienda from "../components/slides/SlideAzienda";
import SlideContesto from "../components/slides/SlideContesto";
import SlideConfronto from "../components/slides/SlideConfronto";
import SlideRequisiti from "../components/slides/SlideRequisiti";
import SlideStack from "../components/slides/SlideStack";
import SlideArchitettura from "../components/slides/SlideArchitettura";
import SlideComponenti from "../components/slides/SlideComponenti";
import SlideFactory from "../components/slides/SlideFactory";
import SlideCrossPanel from "../components/slides/SlideCrossPanel";
import SlidePermessi from "../components/slides/SlidePermessi";
import SlideRisultati from "../components/slides/SlideRisultati";
import SlideCriticita from "../components/slides/SlideCriticita";
import SlideFuturi from "../components/slides/SlideFuturi";
import SlideCompetenze from "../components/slides/SlideCompetenze";
import SlideGrazie from "../components/slides/SlideGrazie";

export const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
    { index: true, element: <SlideCover /> },
    { path: "azienda", element: <SlideAzienda /> },
    { path: "contesto", element: <SlideContesto /> },
    { path: "confronto", element: <SlideConfronto /> },
    { path: "requisiti", element: <SlideRequisiti /> },
    { path: "stack", element: <SlideStack /> },
    { path: "architettura", element: <SlideArchitettura /> },
    { path: "componenti", element: <SlideComponenti /> },
    { path: "factory", element: <SlideFactory /> },
    { path: "cross-panel", element: <SlideCrossPanel /> },
    { path: "permessi", element: <SlidePermessi /> },
    { path: "risultati", element: <SlideRisultati /> },
    { path: "criticita", element: <SlideCriticita /> },
    { path: "futuri", element: <SlideFuturi /> },
    { path: "competenze", element: <SlideCompetenze /> },
    { path: "grazie", element: <SlideGrazie /> },
  ]},
]);
