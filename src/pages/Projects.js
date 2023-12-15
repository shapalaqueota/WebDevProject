import "./styles/pstyle.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    fetch("https://api.github.com/users/shapalaqueota/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.error(error));
  };

  const fetchPreviewImages = (repoName) => {
    return fetch(
      `https://api.github.com/repos/shapalaqueota/${repoName}/contents/preview`
    )
      .then((response) => response.json())
      .then((data) => {
        const image = data.find(
          (item) =>
            item.type === "file" && item.name.match(/\.(jpeg|jpg|png|gif)$/i)
        );
        return image ? image.download_url : null;
      })
      .catch((error) => console.error(error));
  };

  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    const getImageUrls = async () => {
      const urls = {};
      for (const project of projects) {
        const imageUrl = await fetchPreviewImages(project.name);
        urls[project.id] = imageUrl;
      }
      setImageUrls(urls);
    };

    getImageUrls();
  }, [projects]);

  const fetchProjectLanguages = (repoName) => {
    return fetch(
      `https://api.github.com/repos/shapalaqueota/${repoName}/languages`
    )
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };

  // ...

  const [projectLanguages, setProjectLanguages] = useState({});

  useEffect(() => {
    const getProjectLanguages = async () => {
      const languages = {};
      for (const project of projects) {
        const languageData = await fetchProjectLanguages(project.name);
        languages[project.id] = Object.keys(languageData)[0];
      }
      setProjectLanguages(languages);
    };

    getProjectLanguages();
  }, [projects]);

  return (
    <Container>
      <div className="projects-container">
        <div className="right-heading">
          <h1>&gt; Projects</h1>
        </div>
        <Row className="project-list">
          {projects.map((project) => (
            <Col sm={6} md={4} key={project.id}>
              <div className="project-item">
                <Link to={`/projects/${project.name}`}>
                  {imageUrls[project.id] ? (
                    <img src={imageUrls[project.id]} alt="Project Preview" />
                  ) : (
                    <p>No Preview Available</p>
                  )}
                  <p className="project-title">{project.name}</p>
                  <p className="project-language">
                    ● {projectLanguages[project.id]}
                  </p>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Projects;
