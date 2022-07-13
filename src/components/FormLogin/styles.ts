import styled from "styled-components";

interface ContainerProps {
    backgroundColor: string;
}

export const Container = styled.section<ContainerProps>`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.backgroundColor};
`;