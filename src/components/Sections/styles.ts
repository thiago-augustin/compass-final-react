import styled from "styled-components";

export const SectionSqueleton = styled.section`
    width: auto;
    min-height: auto;
    display: flex;
    flex-direction: column;
    background: transparent;
`;

export const FormContent = styled(SectionSqueleton)`
    width: 45%;
    min-height: 65%;
    display: flex;
    flex-direction: column;

    @media (max-width: 320.9px){
        width: 90%;
        min-height: 65%;
    }

    @media (min-width: 321px) and (max-width: 375.9px){
        width: 90%;
        min-height: 85%;
    }

    @media (min-width: 376px) and (max-width: 475.9px){
        width: 90%;
        min-height: 85%;
    }

    @media (min-width: 476px) and (max-width: 768.9px){
        width: 75%;
        min-height: 85%;
    }

    @media (min-width: 769px) and (max-width: 1024.9px){
        width: 90%;
        min-height: 80%;
    }

    @media (min-width: 1025px) and (max-width: 1440.9px){
        width: 70%;
        min-height: 80%;
    }

    @media (min-width: 1921px){
        min-height: 70%;
    }
`;