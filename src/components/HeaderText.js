import React from 'react';

function HeaderText() {
  return (
    <React.Fragment>
      <h2 className='secondary-header'>Portfolio</h2>
      <sub className='secondary-sub'>
        {'//'} These are my favorite projects I've worked on for the past year.
        Have a look around and be sure to contact me.
      </sub>
    </React.Fragment>
  );
}

export default HeaderText;
