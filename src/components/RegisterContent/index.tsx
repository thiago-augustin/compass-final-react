import { UsuarioContext } from 'common/context/Usuario';
import { FormContent } from 'components/Sections/styles';
import { TextWelcome, TextInfo, TextLogin } from 'components/Text/styles';
import { Login } from './Login';
import { ButtonLogin } from 'components/Button/styles';
import { InputDivLogin } from 'components/Divs/styles';
import { LoginInput } from 'components/Input/styles';
import iconUser from '../../assets/user-icon.svg';
import iconPass from '../../assets/pass-icon.svg';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Invalid } from './Validate';
import { Icon } from 'components/Input/Icon/styles';

export default function SectionRegisterContent(){
    const {nome, setNome, password, setPassword} = useContext(UsuarioContext)

    const navigate = useNavigate()

    function validateForm(){
        if(validateEmail() && validateLowercase() && validateUppercase() && validateNumber() && validateSize()){
            register()
        }
    }

    async function register(){
        try{
            const request = await fetch('http://127.0.0.1:8080/api/auth/signup',
                {
                    body: JSON.stringify({email: nome, password: password}),
                    mode: 'cors',
                    headers: new Headers({'Content-Type': 'Application/Json'}),
                    method: 'POST'
                    
                })
            if(request.status === 201){
                navigate('/')
            }
        } catch(error){
            console.log(error);
        }
    }

    function changeEmail(event: string){
        setPassword(event);
    }

    function showError(event: string){
        if(event.length > 0){
            return true;
        }else{
            return false
        }
    }

    function validateEmail(){
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(nome)
    }

    function validateUppercase(){
        return /[A-Z]/.test(password)
    }

    function validateLowercase(){
        return /[a-z]/.test(password)
    }

    function validateSize(){
        if(password.length >= 6){
            return true;
        }else{
            return false;
        }
    }

    function validateNumber(){
        return /[0-9]/.test(password)
    }

    return (
        <FormContent>
            <TextWelcome>Olá,</TextWelcome>
            <TextInfo>Para continuar navegando de forma<br />segura, efetue o login na rede.</TextInfo>
            <TextLogin>Cadastro</TextLogin>
            <InputDivLogin>
                <LoginInput
                    placeholder="Usuário"
                    type="text"
                    value={nome}
                    onChange={(event)=>setNome(event.target.value)}
                />
                <Icon
                    src={iconUser}
                    className={classNames({
                        ['icon']: true,
                        ['outside']: nome.length == 0
                    })}
                />
            </InputDivLogin>
            <InputDivLogin>
                <LoginInput
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={(event) => changeEmail(event.target.value)}
                />
                <Icon 
                    src={iconPass}
                    className={classNames({
                        ['icon']: true,
                        ['outside']: nome.length == 0
                    })}
                />
            </InputDivLogin>
            <Login>Já possui cadastro? <a onClick={()=> navigate('/')}>Logar agora</a></Login>
            {showError(nome) && !validateEmail() && <Invalid>Seu email precisa ter um formato válido</Invalid>}
            {showError(password) && !validateSize() && <Invalid>Sua senha precisa conter no mínimo 6 caracteres</Invalid>}
            {showError(password) && !validateNumber() && <Invalid>Sua senha precisa conter no mínimo 1 número</Invalid>}
            {showError(password) && !validateUppercase() && <Invalid>Sua senha precisa conter no mínimo 1 letra maiúscula</Invalid>}
            {showError(password) && !validateLowercase() && <Invalid>Sua senha precisa conter no mínimo 1 letra minúscula</Invalid>}
            <ButtonLogin onClick={()=> validateForm()}>Continuar</ButtonLogin>
        </FormContent>
    )
};