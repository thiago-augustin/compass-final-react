import React from 'react';
import SectionLogin from '../FormLogin';
import SectionImage from '../ImageLogin';
import { Container } from './styles';

const Section: React.FC = () => 
    <Container>
        <SectionLogin></SectionLogin>
        <SectionImage />
    </Container>

export default Section;