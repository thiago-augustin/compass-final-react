import React from 'react';
import { Header } from './styles';

interface CabecalhoProps {
    children: React.ReactElement[];
}

const Cabecalho: React.FC<CabecalhoProps> = ({
    children,
}) => 
    <Header>
        {children}
    </Header>;

export default Cabecalho;