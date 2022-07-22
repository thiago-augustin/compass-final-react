import styled from "styled-components";

export const Icon = styled.img`
    transition: all 1s;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    &.outside {
        transform: translateY(-50%)translateX(270%);
    }

    @media (max-width: 320.9px){
        width: 16px;
    }

    @media (min-width: 321px) and (max-width: 375.9px){
        width: 18px;
    }
`;