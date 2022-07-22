import styled from "styled-components";

export const Header = styled.header`
    width: 94%;
    margin: 3%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 425.9px) and (max-width: 768.9px){
        flex-direction: row;
        align-items: center;
        width: 94%;
        margin: 3%;
    }

    @media (min-width: 1441px){
        width: 98%;
        margin: 1%;
    }
`;