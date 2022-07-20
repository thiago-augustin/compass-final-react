import styled from "styled-components";

export const SectionSqueleton = styled.section`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    background: transparent;
`;

export const FormContent = styled(SectionSqueleton)`
    width: 379px;
    min-height: 685px;
    display: flex;
    flex-direction: column;
`;