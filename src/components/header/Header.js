import React from "react";
import { Container } from "react-bootstrap";
import "./style.css"; // Путь к вашему файлу стилей

const Header = () => {
  const handleDownload = () => {
    // Создаем ссылку на файл
    const url =
      "https://docs.google.com/document/d/1R5By-sd33SwmCR3i7xOJT2Vybjtsdc8r/edit?usp=sharing&ouid=109304152039866458517&rtpof=true&sd=true";

    const link = document.createElement("a");
    link.href = url;
    link.download = "myCV";
    link.click();
  };

  return (
    <div className="header">
      <Container>
        <div className="download-text-container">
          <div className="download-text">
            <span>12.12.2023 05:06 PM </span>
            <span>DIR</span>
            <span>MY CV</span>
            <span onClick={handleDownload} className="highlight-download">
              DOWNLOAD
            </span>
          </div>

          <div className="download-text">
            <span>13.12.2023 12:28 AM</span>
            <span>⠀⠀⠀</span>
            <span>SECURITY⠀</span>
            <span>NON INTERACTABLE</span>
          </div>

          <div className="download-text">
            <span>14.12.2023 12:28 AM</span>
            <span>DIR</span>
            <span>README.md</span>
            <span>NON INTERACTABLE</span>
          </div>

          <div className="download-text">
            <span>16.12.2023 12:28 AM</span>
            <span>DIR</span>
            <span>LICENSE</span>
            <span>NON INTERACTABLE</span>
          </div>

          <div className="download-text">
            <span>23.12.2023 12:28 AM</span>
            <span>DIR</span>
            <span>README.md</span>
            <span>NON INTERACTABLE</span>
          </div>
        </div>

        <div className="console-header">
          <span className="console-title">console.exe</span>
          <div className="close_icon">
            <span>‒</span>
            <span>❐</span>
            <span>✖</span>
          </div>
        </div>
        <div className="console">
          <div className="output">
            <p>
              C:\Users\Azamat&gt;info project <br /> <br />
              This website template was created by an IITU student for the
              winter session examination on the subject of web technology. The
              site was developed using technologies:
            </p>
            <ul>
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="input-container">
            <a>
              &gt; type...
              <span className="blinking">|</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
