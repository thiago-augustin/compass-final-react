import Cabecalho from 'components/Header';
import React from 'react';
import { Container } from './styles';
import LogoCompass from 'components/Header/Logo';
import WeatherElement from 'components/Header/Weather';
import BolaCompass from 'components/BolaCompasso';

const Section: React.FC = () => 
    <Container>
        <Cabecalho>
            <LogoCompass />
            <WeatherElement />
        </Cabecalho>
        <BolaCompass />
    </Container>

export default Section;