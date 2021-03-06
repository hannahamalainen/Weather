import React, { Component } from 'react';
import DailyWeather from './dailyWeather.js';

class GetWeather extends Component {
    constructor(props) { // initializing the class and its state
        super(props); // props from parent to child
        this.state = { // variables
            days: [],
        }
    };
    
    findData(city) {
            let fetchedData = []
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=430a8b136f38ac44ed0d1b4b9b467a29') // fetches the data of a certain city
            //.catch((error) => window.alert("Error"))
            .then((results) => {
                return results.json(); 
            })
            .then((data) => {
                data.list.map((day) => { //maps the data. day is a single weather measurement moment at 15:00
                    if(day.dt_txt.search("15:00") != -1){
                    const dayObject = {date: day.dt_txt, temp: day.main.temp, description: day.weather.description} //selects the desired data
                    fetchedData.push(dayObject)} //pushes the mapped data to the state variable
                })
                 if(fetchedData.length === 5) {
                    this.setState({days: fetchedData})
                     console.log("moikkamoi")
                 }
            })
        }
    
    componentWillReceiveProps(newProps) { // executed when the class is updated
        this.findData(newProps.city);
    }
    
 render() {
        return (
            this.state.days.map((d, i) => {
                                return <DailyWeather key={i} date={d.date} temp={d.temp} description={d.description} />
                          })
        )
        
    }

}

export default GetWeather;