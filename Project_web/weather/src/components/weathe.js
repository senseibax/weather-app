import React, { Component } from "react";
import "./comp.css"

class WEATHER extends Component {
    render() {
        return (
            <div className="infoWeath">
                {this.props.city &&
                    <div className="top">
                        <div className="top-butt">
                            <div>
                                <p className="city">{this.props.city}, {this.props.country}</p>
                                <p className="weather-description">{this.props.weath}</p>
                            </div>
                            <img alt="weather" className="weather-icon" src={`icons/${this.props.icon}.png`} />
                        </div>
                        <div className="bottom">
                            <p className="temperature">{this.props.temp}</p>
                            <div className="details">
                                <div className="parameter-row">
                                    <span className="parameter">Details</span>
                                </div>
                                <div className="parameter-row">
                                    <span className="parameter">Feels like</span>
                                    <span className="parameter-value">{this.props.feel}</span>
                                </div>
                                <div className="parameter-row">
                                    <span className="parameter">Wind</span>
                                    <span className="parameter-value">{this.props.wind}</span>
                                </div>
                                <div className="parameter-row">
                                    <span className="parameter">Humidity</span>
                                    <span className="parameter-value">{this.props.humidity}</span>
                                </div>
                                <div className="parameter-row">
                                    <span className="parameter">Pressure</span>
                                    <span className="parameter-value">{this.props.pressure}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <p className="error">{this.props.error}</p>
            </div>
        );
    }
}

export default WEATHER;