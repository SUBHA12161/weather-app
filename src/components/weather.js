import React, { useState } from 'react'
import { FaSearch, FaWind } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";

import "../assets/css/style.css";
import { toast } from 'react-toastify';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState();


    const apiKey = "d2eafafabccc9ddefd7324df60d7e8bd"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


    function handleChange(event) {
        setCity(event.target.value)
    }

    async function fetchData() {
        try {
            let responce = await fetch(url)
            if (responce.ok) {
                let data = await responce.json();
                setWeather(data);
            } else {
                toast.error('No data found !!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {

        }
    }

    return (
        <div className='container'>
            <div className="city">
                <input type="text" value={city} onChange={handleChange} placeholder='Type place name...' />
                <button onClick={fetchData}><FaSearch /></button>
            </div>
            {
                weather && (
                    <div className='content'>
                        <div className='weather-image'>
                            <img src={`https://openweathermap.org/img/wn/${weather['weather'][0]['icon']}@2x.png`} alt="hh" />
                            <h3 className='desc'>{weather['weather'][0]['description']}</h3>
                        </div>

                        <div className='weather-temp'>
                            <h3>{weather['main']['temp']}<span>&deg;C</span></h3>
                        </div>

                        <div className='weather-city'>
                            <div className='location'><FaLocationDot /></div>
                            <p>{`${weather['name']},${weather['sys']['country']}`}</p>
                        </div>

                        <div className='weather-stats'>
                            <div className='wind'>
                                <div className='wind-icon'><FaWind /></div>
                                <h3 className='wind-speed'>{weather.wind.speed}<span>km/hr</span></h3>
                                <h3 className='wind-heading'>Wind Speed</h3>
                            </div>

                            <div className='humidity'>
                                <div className='humidity-icon'><WiHumidity /></div>
                                <h3 className='humidity-percentage'>{weather.main.humidity}<span>%</span></h3>
                                <h3 className='humidity-heading'>Humidity</h3>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Weather