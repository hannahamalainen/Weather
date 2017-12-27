import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {city: ''}
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        this.setState({city: event.target.value})
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.sendCity(this.state.city);
    }
    
    render() {
        return (
            <div>
                <h2>Etsi kaupunkia:</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value= {this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SearchBar;