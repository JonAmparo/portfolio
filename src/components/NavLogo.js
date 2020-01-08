import React from 'react';
import { ThemeConsumer } from '../contexts/theme';
import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import moon from '../assets/moon.png';
import sun from '../assets/sun.png';

function NavLogo() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <header className='row space-between'>
          <Link to='/' className='brand'>
            <picture className='brand__img'>
              <source srcSet={`${logo2} 1x`} />
              <img
                className='brand__img'
                srcSet={`${logo2} 1x`}
                alt='Jonathan Amparo | Portfolio'
              />
            </picture>
          </Link>
          <button
            style={{ fontSize: 30 }}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <img srcSet={moon} alt='Dark Mode' />
            ) : (
              <img srcSet={sun} alt='Light Mode' />
            )}
          </button>
        </header>
      )}
    </ThemeConsumer>
  );
}

export default NavLogo;
