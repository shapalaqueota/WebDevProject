import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/pdetails.css";

const ProjectDetailsPage = () => {
  const { projectName } = useParams();
  const [projectDetails, setProjectDetails] = useState({});
  const [imageUrls, setImageUrls] = useState([]);
  const [readmeContent, setReadmeContent] = useState("");

  useEffect(() => {
    fetchProjectDetails(projectName);
    fetchPreviewImages(projectName);
    fetchReadmeContent(projectName);
  }, [projectName]);

  const fetchProjectDetails = (projectName) => {
    fetch(`https://api.github.com/repos/shapalaqueota/${projectName}`)
      .then((response) => response.json())
      .then((data) => {
        setProjectDetails(data);
      })
      .catch((error) => console.error(error));
  };

  const fetchPreviewImages = (repoName) => {
    fetch(
      `https://api.github.com/repos/shapalaqueota/${repoName}/contents/preview`
    )
      .then((response) => response.json())
      .then((data) => {
        const images = data
          .filter(
            (item) =>
              item.type === "file" && item.name.match(/\.(jpeg|jpg|png|gif)$/i)
          )
          .map((image) => ({
            imageUrl: image.download_url,
            alt: image.name,
          }));
        setImageUrls(images);
      })
      .catch((error) => console.error(error));
  };

  const fetchReadmeContent = (repoName) => {
    fetch(`https://api.github.com/repos/shapalaqueota/${repoName}/readme`)
      .then((response) => response.json())
      .then((data) => {
        const readmeContent = atob(data.content); // декодируем из base64
        setReadmeContent(readmeContent); // Сохраняем содержимое README.md
      })
      .catch((error) => console.error(error));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <h1>&gt; {projectDetails.name}</h1>
      <Slider {...sliderSettings}>
        {imageUrls.map((image, index) => (
          <div key={index}>
            <img src={image.imageUrl} alt={image.alt} />
          </div>
        ))}
      </Slider>
      <p id="about">
        <span id="desc">DESCRIPTION</span> <br /> {readmeContent}
      </p>
    </div>
  );
};

export default ProjectDetailsPage;
