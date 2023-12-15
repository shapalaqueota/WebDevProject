import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import Contacts from "./pages/Contacts";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/:projectName"
            element={<ProjectDetailsPage />}
          />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
