import React from 'react';

import { Icon } from './styles';

interface IconProps {
    src: string;
}

const IconElement: React.FC<IconProps> = ({
    src,
}) => 
    <Icon src={src}></Icon>;

export default IconElement;