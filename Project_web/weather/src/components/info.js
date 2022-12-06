import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="City"></input>
                <button>Weather</button>
            </form>
        );
    }
}

export default Form;