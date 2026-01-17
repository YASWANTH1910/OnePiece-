
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import About from "./components/About";
import Arcs from "./components/Arcs";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Slider />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/arcs" element={<Arcs />} />
      </Routes>
    </>
  );
}

export default App
