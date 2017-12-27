import React, { Component } from 'react';
import DailyWeather from './dailyWeather.js';

class GetWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: [],
            dataSaatu: false,
        }
    };
    
    componentWillMount() {
            
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + this.props.city + '&units=metric&appid=430a8b136f38ac44ed0d1b4b9b467a29')
            .then(results => {
                return results.json();
            })
                
            .then(data => {
                data.list.map((day) => {
                    const dayObject = {date: day.dt_txt, temp: day.main.temp, description: day.weather.description}
                    this.state.days.push(dayObject)
                })
            })
            
            

}

    componentWillReceiveProps() {
        this.setState({dataSaatu: true})
        console.log(this.state.days)
    }
    
 render() {
     if(this.state.dataSaatu === true) {
                return <p>{this.state.days[0].temp} Celsiusta</p>   
        }
        return (
            ""
        )
        
    }

}

export default GetWeather;