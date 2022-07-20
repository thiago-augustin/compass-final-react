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
`;