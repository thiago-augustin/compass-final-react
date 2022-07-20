import imageBgLogin from '../../assets/image.jpg';
import logoCompass from '../../assets/Logo-Compasso-Branco.png';
import SectionLoginContent from 'components/LoginContent';
import { FormLogin } from 'components/Divs/styles';
import { ImageLogin, LogoLogin } from 'components/Divs/styles';
import { Container } from './styles';

export default function Section(){
    return(
    <Container>
        <FormLogin>
            <SectionLoginContent></SectionLoginContent>
        </FormLogin>
        <ImageLogin>
            <img src={imageBgLogin} alt="Illustrative image for background" />
            <LogoLogin>
                <img src={logoCompass} alt="Compass.UOL company logo" />
            </LogoLogin>
        </ImageLogin>
    </Container>
    )
}