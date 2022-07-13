import React from 'react';
import { Text } from './styles';

interface TextProps {
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    fontColor: string;
    marginTop: number;
    children: string;
}

const Texto: React.FC<TextProps> = ({
    fontSize,
    fontWeight,
    lineHeight,
    fontColor,
    marginTop,
    children,
}) => 
    <Text fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} fontColor={fontColor} marginTop={marginTop}>
        {children}
    </Text>;

export default Texto;