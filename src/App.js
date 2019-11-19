import React from "react";
import NavLogo from "./components/NavLogo";
import Project from "./components/Project";
import SocialProfiles from "./components/SocialProfiles";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <NavLogo />
      <Project />
      <SocialProfiles />
      <Footer />
    </React.Fragment>
  );
}

export default App;
