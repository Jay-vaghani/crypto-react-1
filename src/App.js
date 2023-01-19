import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CoinsPage from "./pages/CoinsPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App bg-dark bg-black bg-gradient text-white">
      <Header />
      <div className="px-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<CoinsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;