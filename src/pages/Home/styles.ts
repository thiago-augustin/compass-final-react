import styled from "styled-components";
import imageLogo from '../../assets/bola-LogoCompasso.png';

export const Container = styled.div`
    background-image: url(${imageLogo});
	background-position: -200px bottom;
    background-size: 825px;
	background-repeat: no-repeat;
	min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;