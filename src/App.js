import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import "./styles/main.css";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

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

          <Route path="/blog" element={<Blog />} />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
