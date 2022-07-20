import { Header } from 'components/Home/Header/styles';
import Footer from 'components/Home/Footer';
import MainContent from 'components/Home/Content';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { Logo } from 'components/Home/Header/Logo/styles';
import Clock from 'components/Home/Header/Clock';
import WeatherElement from 'components/Home/Header/Weather';
import imagemLogo from '../../assets/LogoCompassoPreto.png';

export default function Section(){
    const navigate = useNavigate()

    function testToken(){
        let token = localStorage.getItem('token') || '';
        isValid(token);
    }

    useEffect(() => {
        testToken();
    }, []);

    window.onstorage = function(e) {
        testToken();
    };

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
            if(request.status !== 200){
                navigate('/')
                localStorage.removeItem('token');
            }
        } catch(error){
            console.log("Erro: "+error);
        }
    }
    return(
    <Container>
        <Header>
            <Logo><img src={imagemLogo} alt="" /></Logo>
            <Clock/>
            <WeatherElement />
        </Header>
        <MainContent/>
        <Footer/>
    </Container>
)};