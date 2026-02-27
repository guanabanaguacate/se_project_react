import "./WeatherCard.css";
import sunny from "../../assets/sunny.svg";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <section className="weather-card">
      <div className="weather-card__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}
        °{currentTemperatureUnit}
      </div>
      <img
       src={sunny}
        alt={`Card showing ${weatherData.isDay ? "day" : "night"} time ${
          weatherData.condition
        } weather`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
