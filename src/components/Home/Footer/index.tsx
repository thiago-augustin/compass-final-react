import { useNavigate } from 'react-router-dom';
import { FooterStyle, InfoDiv, ParagraphDiv, Paragraph, Divider, ButtonDiv, LogoutButton, NavigateButton } from './styles';
import Session from './Session';

export default function Footer(){
    const navigate = useNavigate()

    return(
        <FooterStyle>
            <InfoDiv>
                <ParagraphDiv>
                    <Paragraph>
                        Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a<br />
                        aberta em segundo plano e abra uma nova janela para continuar a navegar.
                    </Paragraph>
                    <Divider /> 
                </ParagraphDiv>
                <Session/>
            </InfoDiv>
            <ButtonDiv>
                
                <NavigateButton onClick={()=>{window.open('https://www.google.com')}}>
                    Continuar<br />
                    Navegando
                </NavigateButton>
                <LogoutButton onClick={()=>{
                    localStorage.removeItem('token')
                    navigate('/')}
                }>
                    Logout
                </LogoutButton>
            </ButtonDiv>
        </FooterStyle>
    )
}