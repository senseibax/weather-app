import { Component } from 'react';
import './App.css';
import Headers from './components/header';
import WEATHER from './components/weathe';
import Form from './components/info';
import Head from './components/head';
import Footer from './components/footer';

const API_KEY = "be404bedf541293ec2059b97bf6c74aa";

class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    feel: undefined,
    wind: undefined,
    humidity: undefined,
    weath: undefined,
    icon: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        feel: data.main.feels_like,
        wind: data.wind.speed,
        weath: data.weather[0].description,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        feel: undefined,
        wind: undefined,
        weath: undefined,
        humidity: undefined,
        icon: undefined,
        error: "Enter the name of the city"
      });
    }
  }

  render() {
    return (
      <div className='Main-wrap'>
        <Head />
        <div className="wrapper" >
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-6 info'><Headers /></div>
                <div className='col-sm-6 form'>
                  <Form weatherMethod={this.gettingWeather} />
                  <WEATHER
                    temp={Math.round(this.state.temp) + " ℃"}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure + " hPa"}
                    feel={Math.round(this.state.feel) + " ℃"}
                    wind={this.state.wind + " m/s"}
                    humidity={this.state.humidity + " %"}
                    weath={this.state.weath}
                    icon={this.state.icon}
                    error={this.state.error}
                  /></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
