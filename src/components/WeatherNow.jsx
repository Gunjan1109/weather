import React, { useEffect, useState } from "react";

const WeatherNow = ({ data }) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return () => clearInterval(timer)
    }, []);

    const cityName = data?.now?.name ?? "Unknown";
    const temperature = data?.now?.main?.temp ?? "--";
    const humidity = data?.now?.main?.humidity ?? "N/A";
    const windSpeed = Math.round((data?.now?.wind?.speed ?? 0) * 3.6);
    const weather = data?.now?.weather?.[0]?.main ?? "Unknown";

    return (
        <div className="weather-now flex flex-col items-center justify-center pb-10 pl-4 pt-2">
            <p className="text-slate-500">{date.toDateString()} {date.getHours()}:{date.getMinutes()}</p>
            <h3 className="text-2xl font-bold">{cityName}</h3>
            <p className="font-bold text-3xl">{temperature} C°</p>
            <p className="font-bold text-2xl">{weather}</p>
            <div className="flex flex-row items-center justify-center space-x-4 text-center">
                <div className="humidity-data" >
                    <p>Humidity</p>
                    <p>{humidity}%</p>
                </div>
                <div className="wind-data">
                    <p>Wind speed</p>
                    <p>{windSpeed} km/h</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherNow;