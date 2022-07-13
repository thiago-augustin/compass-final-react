import styled from "styled-components";
import { fonts, color } from "components/UI/variables";

const ButtonSqueleton = styled.button`
    width: 379px;
    height: 67px;
    border: 2px solid transparent;
    border-radius: 50px;
    font-size: ${fonts.size.size18};
    font-weight: ${fonts.fontWeight.weight700};
    line-height: ${fonts.lineHeight.size18};
`;

export const ButtonLogin = styled(ButtonSqueleton)`
    background: ${color.gradient.darkOrange};
    border-color: "#FF2D04";
    color: ${color.primary.white};
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
    box-shadow: inset 5px 5px 10px 0 rgba(0, 0, 0, 0.15);
    margin-top: auto;
`;



