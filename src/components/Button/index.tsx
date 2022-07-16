import React from 'react';

import { ButtonLogin } from './styles';

interface ButtonProps {
    children: string;
}

const BtnLogin: React.FC<ButtonProps> = ({
    children,
}) => 
    <ButtonLogin>
        {children}
    </ButtonLogin>;

export default BtnLogin;