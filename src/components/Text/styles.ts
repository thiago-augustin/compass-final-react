import styled from "styled-components";

interface TextProps {
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    fontColor: string;
    marginTop: number;
}

export const Text = styled.p<TextProps>`
    font-size: ${(props) => props.fontSize}px;
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.fontColor};
    line-height: ${(props) => props.lineHeight}px;
    margin-top: ${(props) => props.marginTop}px;
`;