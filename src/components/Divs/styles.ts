import styled from "styled-components";
import { color } from "components/UI/variables";

export const DivSqueleton = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ImageLogin = styled(DivSqueleton)`
    width: 50vw;
    height: 100vh;
    position: relative;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 475.9px){
        display: none;
        z-index: -1;
    }

    @media (min-width: 476px) and (max-width: 768.9px){
        width: 100vw;
        z-index: -1;
    }
`;

export const LogoLogin = styled(DivSqueleton)`
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);

    @media (min-width: 476px) and (max-width: 768.9px){
        top: 10px;
    }
`;

export const FormLogin = styled(DivSqueleton)`
    width: 50vw;
    height: 100vh;
    background: ${color.gradient.gray};

    @media (max-width: 475.9px){
        width: 100vw;
    }

    @media (min-width: 476px) and (max-width: 539.9px){
        width: 90%;
        height: 80%;
        border-radius: 25px;
        background: rgba(0,0,0,0.8);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media (min-width: 540px) and (max-width: 768.9px){
        width: 85%;
        height: 80%;
        border-radius: 25px;
        background: rgba(0,0,0,0.8);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const InputDivLogin = styled(DivSqueleton)`
    width: 90%;
    display: flex;
    align-items: flex-start;
    height: 60px;
    position: relative;
    margin-top: 32px;
    
    @media (max-width: 320.9px){
        height: 40px;
    }

    @media (min-width: 321px) and (max-width: 375.9px){
        height: 48px;
    }

    @media (min-width: 376px) and (max-width: 475.9px){
        height: 56px;
    }

    @media (min-width: 1921px){
        height: 64px;
    }
`;
