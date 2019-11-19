import React from "react";

function HeaderText() {
  return (
    <React.Fragment>
      <h2 className="secondary-header">
        <p>Portfolio</p>
      </h2>
      <sub className="secondary-sub">
        <p>
          {"//"} These are my favorite projects I've worked on for the past
          year. Have a look around and be sure to contact me.
        </p>
      </sub>
    </React.Fragment>
  );
}

export default HeaderText;
