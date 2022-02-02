import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Intro from './Intro/Intro';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
