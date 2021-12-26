import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/pages/AboutPage";
import Contact from "./components/pages/Contact";
import HomePage from "./components/pages/HomePage";
import Teams from "./components/pages/Teams";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
