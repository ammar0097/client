import "./App.css";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";

function App() {
  return (
    <Container>
      <div className="App">
        <Navbar />
        <Home/>
      </div>
    </Container>
  );
}

export default App;
