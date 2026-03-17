import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import EssentialsPage from "./pages/EssentialsPage";
import TimelinePage from "./pages/TimelinePage";
import BudgetPage from "./pages/BudgetPage";
import MistakesPage from "./pages/MistakesPage";
import PlannerPage from "./pages/PlannerPage";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/essentials" element={<EssentialsPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/mistakes" element={<MistakesPage />} />
        <Route path="/planner" element={<PlannerPage />} />
      </Routes>

    </HashRouter>
  );
}

export default App;