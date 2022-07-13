import React from 'react';

import { Login } from './styles';

interface InputProps {
    placeholder: string;
}

const InputLogin: React.FC<InputProps> = ({
    placeholder,
}) => 
    <Login placeholder={placeholder}></Login>;

export default InputLogin;