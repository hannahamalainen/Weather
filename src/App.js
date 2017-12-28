import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DailyWeather from './dailyWeather.js';
import GetWeather from './getWeather.js';
import Button from './button.js';
import SearchBar from './Searchbar.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Espoo'
        }
        
        this.getCity = this.getCity.bind(this)
    }
    
    getCity(city) {
        this.setState({city: city})
    }
    
  render() {
    return (
      <div className="App"> 
        <p>{this.state.city}</p>
        
        <SearchBar sendCity={this.getCity}/>
        <GetWeather city={this.state.city} />
        
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
