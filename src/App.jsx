import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
