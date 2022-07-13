import React from 'react';
import imageBg from '../../assets/image.jpg'
import { Img } from './styles';
import LogoElement from './LogoCompass';

const ImageContent: React.FC = () => 
<Img>
    <img src={imageBg} alt="" />
    <LogoElement></LogoElement>
</Img>;

export default ImageContent;