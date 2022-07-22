import styled from "styled-components";

export const Logo = styled.div`
    display: flex;
    width: 150px;
    height: 43px;
    img {
        height: 100%;
    }

    @media (max-width: 425.9px){
        justify-content: flex-start;
        align-items: center;
        order: 2;
        width: 50%;
    }
`;