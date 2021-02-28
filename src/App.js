import React, { PureComponent } from 'react';

import './App.css';
import Header from './components/header/Header';
import Skillset from './components/skillset/Skillset';
import Info from './components/Info/Info';
import Footer from './components/footer/Footer';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <Skillset />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;
