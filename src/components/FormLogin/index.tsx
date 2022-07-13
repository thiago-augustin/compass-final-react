import React from 'react';
import { color } from 'components/UI/variables';
import { Container } from './styles';
import SectionContent from 'components/LoginContent';

const Section: React.FC = () => 
<Container backgroundColor={color.gradient.gray}>
    <SectionContent></SectionContent>
</Container>;

export default Section;