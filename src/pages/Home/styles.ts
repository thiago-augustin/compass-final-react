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

    @media (max-width: 768.9px){
        background-image: none;
    }

    @media (min-width: 769px) and (max-width: 1024.9px){
        background-size: 425px;
    }

    @media (min-width: 1025px) and (max-width: 1440.9px){
        background-size: 640px;
    }
`;