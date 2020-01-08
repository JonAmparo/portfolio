import React from 'react';
import NavLogo from './components/NavLogo';
import Project from './components/Project';
import SocialProfiles from './components/SocialProfiles';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/theme';

class App extends React.Component {
  state = {
    theme: 'dark',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }));
    }
  };
  render() {
    return (
      <React.Fragment>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <NavLogo />
            <Project />
            <SocialProfiles />
            <Footer />
          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
