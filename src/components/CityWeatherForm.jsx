import React, { useState } from "react";

const CityWeatherForm = ({ onCityChange }) => {

    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onCityChange(city);
    }

    return (
        <div className="city-form flex items-center p-3">
            <div className="mr-3">
                <label className="mr-1" htmlFor="inline-city-name">Your city</label>
            </div>
            <div>
                <input type="text"
                    value={city}
                    className="form-input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:bg-blue-200"
                    id="inline-city-name"
                    placeholder="Delhi"
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            handleSubmit(e);
                        }
                    }}
                />
            </div>
            <button
                onClick={handleSubmit}
                className="bg-blue-900 mx-2 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                Send
            </button>
        </div>
    );
}

export default CityWeatherForm;