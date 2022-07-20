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
        width: 100%;
        object-fit: cover;
    }
`;

export const LogoLogin = styled(DivSqueleton)`
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    img {
        width: 306px;
    }
`;

export const FormLogin = styled(DivSqueleton)`
    width: 50vw;
    height: 100vh;
    background: ${color.gradient.gray};
`;

export const InputDivLogin = styled(DivSqueleton)`
    width: 379px;
    height: 60px;
    position: relative;
    margin-top: 32px;
`;
