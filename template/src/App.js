import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from'./Components/Footer';
import ControlledCarousel from './ControlledCarousel';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
        <ControlledCarousel/>
        <Footer/>
      </div>
    );
  }
}

export default App;
