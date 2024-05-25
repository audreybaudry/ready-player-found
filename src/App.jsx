import { Outlet } from "react-router-dom";
import { PageProvider } from "./contexts/PageContext";
import { GameProvider } from "./contexts/GameContext";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <GameProvider>
      <PageProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </PageProvider>
    </GameProvider>
  );
}

export default App;
