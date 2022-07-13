import React from 'react';
import imageLogo from '../../../assets/Logo-Compasso-Branco.png'
import { Logo } from './styles';

const LogoElement: React.FC = () => 
    <Logo><img src={imageLogo} alt=""/></Logo>;

export default LogoElement;