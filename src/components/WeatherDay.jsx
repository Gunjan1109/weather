import { WiNightAltCloudy, WiRain, WiCloud, WiDaySunny, WiSnow, WiThunderstorm, WiTornado } from "react-icons/wi";
import React from "react";

const weatherIconDict= {
    "Clouds": <WiCloud className="text-4xl" />,
    "Sunny": <WiDaySunny className="text-4xl" />,
    "Rain": <WiRain className="text-4xl" />,
    "Clear": <WiDaySunny className="text-4xl" />,
    "Snow": <WiSnow className="text-4xl" />,
    "Thunderstorm": <WiThunderstorm className="text-4xl" />,
    "Tornado": <WiTornado className="text-4xl" />,
};

const WeatherDay = (props) => {

    const weatherIcon = (props.weather in weatherIconDict) ?
        weatherIconDict[props.weather] : <WiNightAltCloudy className="text-4xl" />;

    return (
        <div className="weather-day rounded-md h-min p-3 text-center bg-blue-900 text-white w-min md:w-1/4">
            <p className="font-semibold">{props.day}</p>
            <div className="flex flex-col items-center justify-center">
                {weatherIcon}
            </div>
            <div className="humidity-data">
                <p className="font-light">Humidity</p>
                <p>{props.humidity}%</p>
            </div>
        </div>
    )
}
export default WeatherDay;