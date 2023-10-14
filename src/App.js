import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/navbar";
import InventoryPage from "./Pages/inventory";
import SalesPage from "./Pages/sales";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<InventoryPage />} />
        <Route path="/sales" element={<SalesPage />} />
      </Routes>
    </div>
  );
}

export default App;
