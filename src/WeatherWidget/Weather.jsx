import { useEffect, useState } from "react";
import { FaWind } from "react-icons/fa6";
import { FaThermometerHalf } from "react-icons/fa";

import styles from "./Weather.module.css";

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=49.8383&longitude=24.0232&hourly=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit&forecast_days=1";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [tempUnit, setTempUnit] = useState("");
  const [windSpeedUnit, setWindSpeedUnit] = useState("");

  useEffect(() => {
    fetch(
      `${WEATHER_API}${
        tempUnit === "fahrenheit" ? "&temperature_unit=fahrenheit" : ""
      }${windSpeedUnit === "ms" ? "&wind_speed_unit=ms" : ""}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log("error", err));
  }, [tempUnit, windSpeedUnit]);

  return (
    <>
      <article className={styles.weatherEL}>
        <section className={styles.weather}>
          <h4 className={styles.title}>Wind speed unit:</h4>
          <select
            size="1"
            value={windSpeedUnit}
            onChange={(e) => setWindSpeedUnit(e.target.value)}
          >
            <option value="km">Km/h</option>
            <option value="ms">M/s</option>
          </select>
          <h4 className={styles.title}>Temperature unit:</h4>
          <select
            size="1"
            value={tempUnit}
            onChange={(e) => setTempUnit(e.target.value)}
          >
            <option value="celsius">&#8451;</option>
            <option value="fahrenheit">&#8457;</option>
          </select>
        </section>
        <section className={styles.weatherForecast}>
          <h3>Current Weather</h3>
          <p className={styles.weatherInfo}>
            <FaThermometerHalf />
            <span>
              {
                weather?.hourly?.temperature_2m[
                  weather?.hourly?.temperature_2m.length - 1
                ]
              }
            </span>
          </p>
          <p className={styles.weatherInfo}>
            <FaWind />{" "}
            <span>
              {weather?.hourly?.wind_speed_10m &&
                weather.hourly.wind_speed_10m[
                  weather.hourly.wind_speed_10m.length - 1
                ]}
            </span>
          </p>
        </section>
      </article>
    </>
  );
}

export default Weather;
