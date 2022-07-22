import { UsuarioContext } from 'common/context/Usuario';
import { FormContent } from 'components/Sections/styles';
import { TextWelcome, TextInfo, TextLogin } from 'components/Text/styles';
import { Register } from './Register';
import { ButtonLogin } from 'components/Button/styles';
import { InputDivLogin } from 'components/Divs/styles';
import { LoginInput } from 'components/Input/styles';
import iconUser from '../../assets/user-icon.svg';
import iconPass from '../../assets/pass-icon.svg';
import classNames from 'classnames';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Validate from './Validate';
import { Icon } from 'components/Input/Icon/styles';

export default function SectionLoginContent(){
    const {nome, setNome, password, setPassword} = useContext(UsuarioContext)
    const [error, setError] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('token') || '';
        if(token){
            isValid(token);
        }
    }, []);

    const navigate = useNavigate()

    function validateForm(){
        if(validateEmail() && validatePassword()){
            login()
            setError(false)
            return
        }
        setError(true) 
    }

    async function isValid(token: string){
        try{
            const request = await fetch('http://127.0.0.1:8080/api/auth/validate',
                {
                    mode: 'cors',
                    headers: new Headers({
                        'Content-Type': 'Application/Json',
                        'Authorization': 'Bearer ' + token,
                    }),
                    method: 'GET'
                })
            if(request.status === 200){
                navigate('/home')
            }else {
                localStorage.removeItem('token');
            }
        } catch(error){
            console.log("Erro: "+error);
        }
    }

    async function login(){
        try{
            const request = await fetch('http://127.0.0.1:8080/api/auth/signin',
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
                navigate('/home')
            }else if(request.status === 404){
                setError(true);
            }else {
                setError(true);
            }
            
        } catch(error){
            console.log(error);
        }
    }

    function validateEmail(){
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(nome)
    }

    function validatePassword(){
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)
    }

    return (
        <FormContent>
            <TextWelcome>Olá,</TextWelcome>
            <TextInfo>Para continuar navegando de forma<br />segura, efetue o login na rede.</TextInfo>
            <TextLogin>Login</TextLogin>
            <InputDivLogin>
                <LoginInput
                    placeholder="Usuário"
                    type="text"
                    className={classNames({
                        ['error']: error
                    })}
                    value={nome}
                    onKeyDown={(event) => {if(event.key === 'Enter'){
                        event.preventDefault();
                        validateForm()
                    }}}
                    onChange={(event)=>{
                        setError(false)
                        setNome(event.target.value)
                    }}
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
                    className={classNames({
                        ['error']: error
                    })}
                    value={password}
                    onKeyDown={(event) => {if(event.key === 'Enter'){
                        event.preventDefault();
                        validateForm()
                    }}}
                    onChange={(event)=> {
                        setError(false)
                        setPassword(event.target.value)
                    }}
                />
                <Icon 
                    src={iconPass}
                    className={classNames({
                        ['icon']: true,
                        ['outside']: password.length == 0
                    })}
                />
            </InputDivLogin>
            <Register>Não possui cadastro? <a onClick={()=> navigate('/register')}>Cadastre-se agora</a></Register>
            <Validate className={classNames({
                ['error']: error
            })}>
                Ops, usuário ou senha inválidos.<br />
                Tente novamente!
            </Validate>
            <ButtonLogin onClick={()=> validateForm()}>Entrar</ButtonLogin>
        </FormContent>
    )
};