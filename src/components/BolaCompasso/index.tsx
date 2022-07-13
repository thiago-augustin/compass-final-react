import React from 'react';
import { Bola } from './styles';
import imagemBola from '../../assets/bola-LogoCompasso.png';

const BolaCompass: React.FC = () => 
<Bola>
    <img src={imagemBola} alt="" />
</Bola>;

export default BolaCompass;