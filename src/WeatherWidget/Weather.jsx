import { FaWind } from "react-icons/fa6";
import { FaThermometerHalf } from "react-icons/fa";
import { Component } from "react";

import styles from "./Weather.module.css";

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=49.8383&longitude=24.0232&current=temperature_2m,wind_speed_10m&forecast_days=1";

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
      tempUnit: "",
      windSpeedUnit: "",
    };
  }

  componentDidMount() {
    this.fetchWeather();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.tempUnit !== this.state.tempUnit ||
      prevState.windSpeedUnit !== this.state.windSpeedUnit
    ) {
      this.fetchWeather();
    }
  }

  handleTempUnitChange = (e) => {
    this.setState({ tempUnit: e.target.value });
  };

  handleWindSpeedUnitChange = (e) => {
    this.setState({ windSpeedUnit: e.target.value });
  };

  fetchWeather() {
    fetch(
      `${WEATHER_API}${
        this.state.tempUnit === "fahrenheit"
          ? "&temperature_unit=fahrenheit"
          : ""
      }${this.state.windSpeedUnit === "ms" ? "&wind_speed_unit=ms" : ""}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ weather: data }))
      .catch((err) => console.log("error", err));
  }

  render() {
    const { weather, tempUnit, windSpeedUnit } = this.state;

    return (
      <article className={styles.weatherEL}>
        <section className={styles.weather}>
          <h4 className={styles.title}>Wind speed unit:</h4>
          <select
            size="1"
            value={windSpeedUnit}
            onChange={this.handleWindSpeedUnitChange}
          >
            <option value="km">Km/h</option>
            <option value="ms">M/s</option>
          </select>
          <h4 className={styles.title}>Temperature unit:</h4>
          <select
            size="1"
            value={tempUnit}
            onChange={this.handleTempUnitChange}
          >
            <option value="celsius">&#8451;</option>
            <option value="fahrenheit">&#8457;</option>
          </select>
        </section>
        <section className={styles.weatherForecast}>
          <h3>Current Weather</h3>
          <p className={styles.weatherInfo}>
            <FaThermometerHalf />
            <span>{weather?.current?.temperature_2m}</span>
          </p>
          <p className={styles.weatherInfo}>
            <FaWind /> <span>{weather?.current?.wind_speed_10m}</span>
          </p>
        </section>
      </article>
    );
  }
}
export default Weather;
