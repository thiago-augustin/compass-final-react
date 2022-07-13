import React from 'react';
import { Weather } from './styles';
import imagemTemperatura from '../../../assets/temperatura.png';

const WeatherElement: React.FC = () => 
<Weather>
    <img src={imagemTemperatura} alt="" />
</Weather>;

export default WeatherElement;