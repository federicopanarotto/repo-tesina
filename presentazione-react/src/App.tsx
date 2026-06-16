import { Outlet } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import "./App.css";

export default function App() {
  return (
    <>
      <Outlet />
      <Navigation />
    </>
  );
}
