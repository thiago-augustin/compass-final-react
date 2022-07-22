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
import { Invalid, InvalidLast } from './Validate';
import { Icon } from 'components/Input/Icon/styles';
import { Alert } from './Validate';
import { ErrorIcon } from './Validate';
import { CorrectIcon } from './Validate';
import incorrect from '../../assets/error-icon.png';
import correct from '../../assets/correct-icon.png';

export default function SectionRegisterContent(){
    const {nome, setNome, password, setPassword} = useContext(UsuarioContext)
    const [erro, setErro] = useState(false);

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
                const myToken = await request.json()
                if(request.status === 201){
                    localStorage.setItem('token', myToken.token)
                    setNome("");
                    setPassword("");
                    navigate('/')
                    setErro(false)
                }else if(request.status === 400)(
                    setErro(true)
                )
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
            <TextInfo>Para continuar navegando de forma<br />segura, efetue o cadastro na rede.</TextInfo>
            <TextLogin>Cadastro</TextLogin>
            {erro && <Alert>Email inválido, por favor tente outro!</Alert>}
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
            {showError(nome) &&
            <Invalid className={classNames({['valid']: validateEmail()})}>
                {!validateEmail() && <ErrorIcon><img src={incorrect} alt="" /></ErrorIcon>}
                {validateEmail() && <ErrorIcon><img src={correct} alt="" /></ErrorIcon>}
                O email deve ter um formato válido
            </Invalid>}
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
                        ['outside']: password.length == 0
                    })}
                />
            </InputDivLogin>
            {showError(password) && 
            <Invalid className={classNames({['valid']: validateSize()})}>
                {!validateSize() && <ErrorIcon><img src={incorrect} alt="" /></ErrorIcon>}
                {validateSize() && <ErrorIcon><img src={correct} alt="" /></ErrorIcon>}
                Mínimo 6 caracteres
            </Invalid>}
            {showError(password) && 
            <Invalid className={classNames({['valid']: validateNumber()})}>
                {!validateNumber() && <ErrorIcon><img src={incorrect} alt="" /></ErrorIcon>}
                {validateNumber() && <ErrorIcon><img src={correct} alt="" /></ErrorIcon>}
                Mínimo 1 número
            </Invalid>}
            {showError(password) && 
            <Invalid className={classNames({['valid']: validateUppercase()})}>
                {!validateUppercase() && <ErrorIcon><img src={incorrect} alt="" /></ErrorIcon>}
                {validateUppercase() && <ErrorIcon><img src={correct} alt="" /></ErrorIcon>}
                Mínimo 1 letra maiúscula
            </Invalid>}
            {showError(password) && 
            <InvalidLast className={classNames({['valid']: validateLowercase()})}>
                {!validateLowercase() && <ErrorIcon><img src={incorrect} alt="" /></ErrorIcon>}
                {validateLowercase() && <ErrorIcon><img src={correct} alt="" /></ErrorIcon>}
                Mínimo 1 letra minúscula
            </InvalidLast>}
            <ButtonLogin onClick={()=> validateForm()}>Cadastre-se</ButtonLogin>
            <Login>Já possui cadastro? <a onClick={()=> navigate('/')}>Logar agora</a></Login>
        </FormContent>
    )
};