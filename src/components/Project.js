import React, { useState } from "react";
import { FaEye, FaCode, FaTimes } from "react-icons/fa";
import HeaderText from "./HeaderText.js";
import logo1 from "../assets/logo1.png";
import projectForumBlog from "../assets/projectForumBlog.png";
import projectCar from "../assets/projectCar.png";
import projectGym from "../assets/projectGym.png";
import projectLeroy from "../assets/projectLeroy.png";
import projectScandia from "../assets/projectScandia.png";

const DATA = [
  {
    name: "Portfolio",
    summary:
      "The idea behind this project was to create a showcase of all my big projects for the past year. I tried to keep the UI as simple as possible without any fluff. \n\n This is a Single Page Application and is built using React.js and SASS with the BEM methodology.",
    img: logo1,
    demo: "https://jonamparo.com",
    code: "https://github.com/jonamparo/portfolio",
    technologies: [
      { name: "HTML & CSS" },
      { name: "JavaScript" },
      { name: "SASS" },
      { name: "React.JS" },
      { name: "Responsiveness" },
      { name: "UI/UX" }
    ]
  },
  {
    name: "Gym Application",
    summary:
      "This project currently under construction... I'm using this project as a tool for furthering my understanding of the whole React ecosystem. Optimizing the way I would organize files, structuring components, utilizing API calls, relating components to another branch and anything else I learn from React.  Currently one of my favorite things to do right now!",
    img: projectGym,
    demo: "https://jonamparo.github.io/gym/#/",
    code: "https://github.com/jonamparo/gym",
    technologies: [
      { name: "HTML & CSS" },
      { name: "JavaScript" },
      { name: "SASS" },
      { name: "React.JS" },
      { name: "Chart.JS" },
      { name: "Responsiveness" },
      { name: "UI/UX" }
    ]
  },
  {
    name: "Car Rental Service",
    summary:
      "For this project, I decided to create it from scratch. The purpose of this Car Rental Application is to handle a business's needs of renting out vehicles to customers, maintaining records and data on vehicle fleet, operating the customer portal website, and reporting the state of the system to the company. \n\n Since I had a lot of time to build the project and wanted to learn as much as possible, I decided to build everything from scratch.",
    img: projectCar,
    demo: "https://car-rental-project.herokuapp.com/",
    code: "https://github.com/JonAmparo/Car-Rental-Project",
    technologies: [
      { name: "HTML & CSS" },
      { name: "JavaScript" },
      { name: "JQuery" },
      { name: "Bootstrap" },
      { name: "PHP" },
      { name: "MySQL" },
      { name: "Responsiveness" },
      { name: "UI/UX" }
    ]
  },
  {
    name: "Power Blog",
    summary:
      "On this project, I was responsible for the functionality of the whole project, the frontend implementation and most of the backend implementation. The goal was to create a website that had the ability to register an account and login. Other functionality consists of creating posts, editing your profile, changing your password, and viewing other registered users.  \n\n During this project I utilized CRUD operations, PHP, JavaScript, AJAX, JQuery and more.",
    img: projectForumBlog,
    demo: "https://jon-forum-blog.herokuapp.com/",
    code: "https://github.com/JonAmparo/Forum-Blog",
    technologies: [
      { name: "HTML & CSS" },
      { name: "JavaScript" },
      { name: "JQuery" },
      { name: "PHP" },
      { name: "Responsiveness" },
      { name: "UI/UX" }
    ]
  },
  {
    name: "Le Roy Du Pavage",
    summary:
      "On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.",
    img: projectLeroy,
    demo: "https://leroydupavage.ca/en",
    code: "private",
    technologies: [
      { name: "HTML & CSS" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "JQuery" },
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Responsiveness" },
      { name: "UI/UX" }
    ]
  },
  {
    name: "Scandia Canada Ltd.",
    summary:
      "On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.",
    img: projectScandia,
    demo: "https://scandiacanada.com/",
    code: "private",
    technologies: [
      { name: "HTML & CSS" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "JQuery" },
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Responsiveness" },
      { name: "UI/UX" }
    ]
  }
];

const Projects = () => (
  <main>
    <HeaderText />
    <div className="portfolio">
      <div className="row">
        {DATA.map((DATA, index) => (
          <Project key={index + DATA.name + DATA.code} data={DATA} />
        ))}
      </div>
    </div>
  </main>
);

const Project = props => {
  const { name, summary, img, demo, code, technologies } = props.data;
  const [showProject, setProject] = useState(false);

  return (
    <React.Fragment>
      <div className="col-md-6 col-12 col-1-of-2 project">
        <div className="project__item">
          <img className="project__img" src={`${img}`} alt="Project" />
          <div className="project__overlay">
            <div className="project__buttons">
              <button
                href="#"
                className="project__button"
                onClick={() => setProject(true)}
              >
                <FaEye />
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {showProject === true ? (
        <div className="project__background project__background--show">
          <div className="project__modal project__modal--show">
            <button
              className="project__close"
              onClick={() => setProject(false)}
            >
              <FaTimes />
            </button>
            <div className="project__left">
              <img
                className="project__img--modal"
                src={`${img}`}
                alt="Project"
              />
            </div>
            <div className="project__right">
              <div className="project__label">Project</div>

              <h3 className="project__name">{name}</h3>
              <ul className="project__technologies">
                {technologies.map((TECHNAME, index) => (
                  <li className="project__technology" key={index}>
                    {TECHNAME.name}
                  </li>
                ))}
              </ul>
              <div className="project__label">About</div>
              <p className="project__summary">{summary}</p>
              <a
                href={demo}
                className="project__button project__button--modal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEye /> Demo
              </a>
              {code === "private" ? (
                <button
                  href="#"
                  className="project__button project__button--modal"
                  disabled
                >
                  <FaCode /> Private
                </button>
              ) : (
                <a
                  href={code}
                  className="project__button project__button--modal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode /> Code
                </a>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Projects;
