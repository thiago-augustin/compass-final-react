import React from 'react';
import { Logo } from './styles';
import imagemLogo from '../../../assets/LogoCompassoPreto.png';

const LogoCompass: React.FC = () => 
<Logo>
    <img src={imagemLogo} alt="" />
</Logo>;

export default LogoCompass;