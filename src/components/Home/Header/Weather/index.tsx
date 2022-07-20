import React from 'react';
import cloud from '../../../../assets/cloud.svg';
import { useEffect, useState } from 'react'
import { WeatherDiv, LocationDiv, LocationContent, TemperatureDiv, TemperatureContent, IconDiv } from './styles';

export default function Weather(){
    const [weather, setWeather] = useState<Weather>()
    
    async function GrantedGeolocation(position: GeolocationPosition){
        // eslint-disable-next-line
        const request = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=f09c7c6b`, {
            mode: 'cors',
            headers: {'Content-Type': 'Application/Json'}
        })
        const json = await request.json()
        setWeather(json)
    }
    async function DeniedGeolocation() {
        const request = await fetch('https://api.hgbrasil.com/weather?format=json-cors&key=f09c7c6b', {
            mode: 'cors',
            headers: { 'Content-Type': 'Application/Json' }
        })
        const json = await request.json()
        setWeather(json)
    }

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(async (position) => {
                await GrantedGeolocation(position)
            },async ()=> {
                await DeniedGeolocation()
            })
        }
    },[])

    return(
        <WeatherDiv>
            <LocationDiv>
                <LocationContent>
                    {weather ? `${weather.results.city.split(',')[0]} - ${weather?.results.city.split(',')[1]}` : 'Buscando...'}
                </LocationContent>
            </LocationDiv>
            <TemperatureDiv>
                <IconDiv><img src={cloud} alt="" /></IconDiv>
                <TemperatureContent>
                    {JSON.stringify(weather?.results.temp) || 0}°
                </TemperatureContent>
            </TemperatureDiv>
        </WeatherDiv>
    )
}

interface Forecast {
  date: string;
  weekday: string;
  max: number;
  min: number;
  description: string;
  condition: string;
}

interface Results {
  temp: number;
  date: string;
  time: string;
  condition_code: string;
  description: string;
  currently: string;
  cid: string;
  city: string;
  img_id: string;
  humidity: number;
  wind_speedy: string;
  sunrise: string;
  sunset: string;
  condition_slug: string;
  city_name: string;
  forecast: Forecast[];
}

interface Weather {
  by: string;
  valid_key: boolean;
  results: Results;
  execution_time: number;
  from_cache: boolean;
}