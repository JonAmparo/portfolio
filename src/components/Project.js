import React, { useState } from 'react';
import { FaEye, FaCode, FaTimes } from 'react-icons/fa';
import HeaderText from './HeaderText.js';
import projectForumBlog from '../assets/projectForumBlog.png';
import projectCar from '../assets/projectCar.png';
import projectGravitus from '../assets/projectGravitus.png';
import projectConstructionNicolas from '../assets/projectConstructionNicolas.png';
import projectJarmicos from '../assets/projectJarmicos.png';
import projectLeroy from '../assets/projectLeroy.png';
import projectScandia from '../assets/projectScandia.png';
import projectFylo from '../assets/projectFylo.png';
import projectKids from '../assets/projectKids.png';
import projectIllusarium from '../assets/projectIllusarium.png';
import projectPneus from '../assets/projectPneus.png';
import projectAux from '../assets/projectAux.png';
import projectBien from '../assets/projectBien.png';
import projectHarbor from '../assets/projectHarbor.png';
import projectTibbs from '../assets/projectTibbs.png';
import projectCommerce from '../assets/projectCommerce.png';
import projectV2 from '../assets/projectV2.png';

const DATA = [
  // {
  //   name: 'Portfolio',
  //   summary:
  //     'The idea behind this project was to create a showcase of all my big projects for the past year. I tried to keep the UI as simple as possible without any fluff. \n\n This is a Single Page Application and is built using React.js and SASS with the BEM methodology.',
  //   img: logo1,
  //   demo: 'https://jonamparo.com',
  //   code: 'https://github.com/jonamparo/portfolio',
  //   technologies: [
  //     { name: 'HTML & CSS' },
  //     { name: 'JavaScript' },
  //     { name: 'SASS' },
  //     { name: 'React.JS' },
  //     { name: 'Responsiveness' },
  //     { name: 'UI/UX' }
  //   ]
  // },
  {
    name: 'Commerce Store',
    summary: `This project is built using an eCommerce platform built for developer and designers by https://commercejs.com/. I wrote documentation on how to setup Commerce.js SDK in a React.js enviornment. To view that documentation, please click the button that says "code" below. \n\n In this project I made an API call to the back-end to retrieve the data on my store. Then I displayed all of my products by name, image, description, and price. You also have the ability to purchase the items from my store using Chec checkout system. If you'd like to learn more, you can check out https://commercejs.com/. Or if you'd like to start your eCommerce platform with Commerce.js. Check out my guide at https://github.com/JonAmparo/react-commercejs`,
    img: projectCommerce,
    demo: 'https://jonamparo.github.io/react-commercejs/',
    code: 'https://github.com/JonAmparo/react-commercejs',
    technologies: [
      { name: 'React.js' },
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Commerce API' },
      { name: 'Responsiveness' },
      { name: 'Grids & Flexbox' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Portfolio v2',
    summary:
      'The idea behind this project was to create a showcase of all my big projects for the past year. I tried to keep the UI as simple as possible without any fluff. I also pull from the Github API to retrieve my profile to display it on my website. \n\n This project was inspired by Sarah Drasner. An amazing developer, designer and just an overall good person. :) ',
    img: projectV2,
    demo: 'https://jonamparo.github.io/v2/#/projects',
    code: 'https://github.com/JonAmparo/v2',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'SASS' },
      { name: 'React.JS' },
      { name: 'Responsiveness' },
      { name: 'Grids' },
      { name: 'Github API' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Gym Application',
    summary:
      "This project is inspired by the mobile application called 'Gravitus’. It’s my favorite gym application to track my workouts. I’m using this app as a way to further my understanding, correlation and project structure of React, Node, Express, MongoDB, and Redux. In this application, users can create accounts, login, create, update, read and delete their profiles. Users also have the ability to create, update, read and delete workouts! This project uses React, MongoDB, Node, Express, Redux, Webpack, SASS, JQuery, and Bootstrap.",
    img: projectGravitus,
    demo: 'https://gravitus.herokuapp.com/',
    code: 'https://github.com/jonamparo/gravitus',
    technologies: [
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Redux' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
      { name: 'Express' },
      { name: 'Webpack' },
      { name: 'JQuery' },
      { name: 'Bootstrap' },
      { name: 'SASS' },
    ],
  },
  {
    name: 'Fylo',
    summary:
      "This is a project provided by frontendmentor.io. How it works is they give me the images, style guide and tools to do the project. Then I build the project to look like the design. Overall, it was a fun project to do because I didn't have to think about a design. I just put everything together.",
    img: projectFylo,
    demo: 'https://jonamparo.github.io/Fylo',
    code: 'https://github.com/JonAmparo/Fylo',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'SASS' },
      { name: 'React.JS' },
      { name: 'Responsiveness' },
      { name: 'Grids / Flex' },
      { name: 'Styled Components' },
    ],
  },
  {
    name: 'Car Rental Service',
    summary:
      "For this project, I decided to create it from scratch. The purpose of this Car Rental Application is to handle a business's needs of renting out vehicles to customers, maintaining records and data on vehicle fleet, operating the customer portal website, and reporting the state of the system to the company. \n\n Since I had a lot of time to build the project and wanted to learn as much as possible, I decided to build everything from scratch.",
    img: projectCar,
    demo: 'https://car-rental-project.herokuapp.com/',
    code: 'https://github.com/JonAmparo/Car-Rental-Project',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'JQuery' },
      { name: 'Bootstrap' },
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Power Blog',
    summary:
      'On this project, I was responsible for the functionality of the whole project, the frontend implementation and most of the backend implementation. The goal was to create a website that had the ability to register an account and login. Other functionality consists of creating posts, editing your profile, changing your password, and viewing other registered users.  \n\n During this project I utilized CRUD operations, PHP, JavaScript, AJAX, JQuery and more.',
    img: projectForumBlog,
    demo: 'https://jon-forum-blog.herokuapp.com/',
    code: 'https://github.com/JonAmparo/Forum-Blog',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Kids Corner Day Care',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectKids,
    demo: 'https://www.kidscornerdaycare.ca/',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Construction Nicolas Avoine',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectConstructionNicolas,
    demo: 'https://www.constructionnicolasavoine.ca/',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Le Roy Du Pavage',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectLeroy,
    demo: 'https://leroydupavage.ca/en',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Aux 1000 Fleurs',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectAux,
    demo: 'https://www.aux1000fleurs.ca/',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Scandia Canada Ltd.',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectScandia,
    demo: 'https://scandiacanada.com/',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Pneus Jobidon',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectPneus,
    demo: 'https://www.pneusjobidon.ca/',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Illusarium',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectIllusarium,
    demo: 'https://www.illusarium.com/',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Bien Range',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectBien,
    demo: 'https://bienrange.com/en',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Jarmicos',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectJarmicos,
    demo: 'https://www.jarmicos.com/',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Tibbs Locksmithing',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectTibbs,
    demo: 'https://www.tibbslocksmithing.ca/',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
  {
    name: 'Harbour Metals ',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectHarbor,
    demo: 'https://harbourmetals.ca/',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' },
    ],
  },
];

const Projects = () => (
  <main>
    <HeaderText />
    <div className='portfolio'>
      <div className='row'>
        {DATA.map((DATA, index) => (
          <Project key={index + DATA.name + DATA.code} data={DATA} />
        ))}
      </div>
    </div>
  </main>
);

const Project = (props) => {
  const { name, summary, img, demo, code, technologies } = props.data;
  const [showProject, setProject] = useState(false);

  return (
    <React.Fragment>
      <div className='col-md-6 col-12 project'>
        <div className='project__item'>
          <img className='project__img' src={`${img}`} alt='Project' />
          <div className='project__overlay'>
            <div className='project__buttons'>
              <button
                className='project__button'
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
        <div className='project__background project__background--show'>
          <div className='project__modal project__modal--show'>
            <button
              className='project__close'
              onClick={() => setProject(false)}
            >
              <FaTimes />
            </button>
            <div className='project__left'>
              <img
                className='project__img--modal'
                src={`${img}`}
                alt='Project'
              />
            </div>
            <div className='project__right'>
              <div className='project__label'>Project</div>

              <h3 className='project__name'>{name}</h3>
              <ul className='project__technologies'>
                {technologies.map((TECHNAME, index) => (
                  <li className='project__technology' key={index}>
                    {TECHNAME.name}
                  </li>
                ))}
              </ul>
              <div className='project__label'>About</div>
              <p className='project__summary'>{summary}</p>
              <a
                href={demo}
                className='project__button project__button--modal'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaEye /> Demo
              </a>
              {code === 'private' ? (
                <button
                  href='#'
                  className='project__button project__button--modal'
                  disabled
                >
                  <FaCode /> Private
                </button>
              ) : (
                <a
                  href={code}
                  className='project__button project__button--modal'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaCode /> Code
                </a>
              )}
            </div>
          </div>
          <button
            onClick={() => setProject(false)}
            className='backdrop'
            hidden
            tabIndex='-1'
          ></button>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Projects;
