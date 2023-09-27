import MainContent from "./components/MainCiontent";
import Sidebar from "./components/Sidebar";
import "./styles/components/app.sass";

export const App = () => {
  return (
    <>
      <div id="portfolio">
        <h1>Luis Fernando Lima Miguel</h1>
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
};
