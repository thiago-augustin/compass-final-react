import React from 'react';
import { Container } from './styles';
import { color } from '../../components/UI/variables';
import Texto from 'components/Text';
import BotaoLogin from '../Button';
import InputLogin from 'components/Input';
import Div from './InputDiv';
import IconElement from 'components/Input/Icon';
import iconUser from '../../assets/user-icon.svg';
import iconPass from '../../assets/pass-icon.svg';

const Section: React.FC = () => 
<Container>
    <Texto fontSize={60} lineHeight={76} fontWeight={400} fontColor={color.secondary.lightGray} marginTop={0}>Olá,</Texto>
    <Texto fontSize={16} lineHeight={20.30} fontWeight={400} fontColor={color.secondary.lightGray} marginTop={0}>Para continuar navegando de forma segura, efetue o login na rede.</Texto>
    <Texto fontSize={30} lineHeight={38} fontWeight={400} fontColor={color.secondary.lightGray} marginTop={135}>Login</Texto>
    <Div>
        <InputLogin placeholder="Usuário"></InputLogin>
        <IconElement src={iconUser}></IconElement>
    </Div>
    <Div>
        <InputLogin placeholder="Senha"></InputLogin>
        <IconElement src={iconPass}></IconElement>
    </Div>
    <BotaoLogin>Continuar</BotaoLogin>
</Container>

export default Section;