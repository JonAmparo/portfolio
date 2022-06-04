import React from 'react';
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitter,
  // FaFreeCodeCamp,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SocialProfiles = () => {
  return (
    <React.Fragment>
      <div className='contact'>
        <ul className='contact__list'>
          <li className="contact__item">
            <a
              href="https://www.linkedin.com/in/jonathanamparo/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link contact__link--linkedin"
            >
              <span className="contact__label">Linkedin</span>
              <FaLinkedin />
            </a>
          </li>
          <li className='contact__item'>
            <a
              href='https://github.com/jonamparo'
              target='_blank'
              rel='noopener noreferrer'
              className='contact__link contact__link--github'
            >
              <span className='contact__label'>Github</span>
              <FaGithubSquare />
            </a>
          </li>

          <li className='contact__item'>
            <a
              href='mailto:jonathanmamparo@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='contact__link contact__link--email'
            >
              <span className='contact__label'>Email</span>
              <MdEmail />
            </a>
          </li>
          <li className='contact__item'>
            <a
              href='https://twitter.com/JonAmparo16'
              target='_blank'
              rel='noopener noreferrer'
              className='contact__link contact__link--twitter'
            >
              <span className='contact__label'>Twitter</span>
              <FaTwitter />
            </a>
          </li>

          {/* <li className="contact__item">
            <a
              href="https://www.freecodecamp.org/jonamparo"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link contact__link--fcc"
            >
              <span className="contact__label">FCC</span>
              <FaFreeCodeCamp />
            </a>
          </li> */}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SocialProfiles;
