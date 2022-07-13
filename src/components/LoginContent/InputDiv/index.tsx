import React from 'react';
import { Container } from './styles';

interface DivProps {
    children: React.ReactElement[] 
}

const Div: React.FC<DivProps> = ({children}) => 
<Container>
    {children}
</Container>

export default Div;