const OPENWEATHER_URL = "https://api.openweathermap.org";

const fetchWeatherData = async (lat, lon) => {
    const API_URL = `${OPENWEATHER_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`;
    try {
        const response = await fetch(API_URL, { method: "GET" });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

const fetchWeatherDataNow = async (lat, lon) => {
    const API_URL = `${OPENWEATHER_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`;
    try {
        const response = await fetch(API_URL, { method: "GET" });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

const fetchCityLocation = async (cityName) => {
    const API_URL = `${OPENWEATHER_URL}/geo/1.0/direct?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHER_API}`;
    try {
        const response = await fetch(API_URL, { method: "GET" });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return { lat: data[0].lat, lon: data[0].lon };
    } catch (error) {
        throw error;
    }
};

export { fetchWeatherData, fetchWeatherDataNow, fetchCityLocation };