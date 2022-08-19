import "./App.css";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <Container>
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Projects />} />
            </Routes>
          </div>
        </BrowserRouter>
      </header>
    </Container>
  );
}

export default App;
