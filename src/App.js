import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DailyWeather from './dailyWeather.js';
import Button from './button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        {
            data.map(function(obj) {
                return <DailyWeather date={obj.date} temp={obj.temp} description={obj.description} /> 
            })
        }
        
      </div>
    );
  }
}

export default App;

let data = [
    {date:'Keskiviikko 27.12.2017', temp:'0', description:'Sataa'},
    {date:'Torstai 28.12.2017', temp:'-2', description:'Aurinkoista'},
    {date:'Perjantai 29.12.2017', temp:'1', description:'Pilvistä'}
];
