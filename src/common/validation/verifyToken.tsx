import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TokenVerification = () => {
    console.log("chegou no login");
    const navigate = useNavigate()
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    if(token === '' || token === 'undefined'){
        navigate('/');
    }else if(token){
        isValid();
    }

    async function isValid(){
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
                console.log("chegou no if");
                navigate('/home')
            }else {
                console.log("chegou no else");
                navigate('/')
            }
        } catch(error){
            console.log("Erro: "+error);
        }
    }
}