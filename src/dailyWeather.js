import React, { Component } from 'react';

class DailyWeather extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.date}</h2>
                <p>Lämpötila: {this.props.temp} <br /> {this.props.description} </p>
            </div>
        )
    }
}

export default DailyWeather;