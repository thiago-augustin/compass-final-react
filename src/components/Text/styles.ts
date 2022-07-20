import styled from "styled-components";
import { color, fonts } from "components/UI/variables";

const Text = styled.p`
    font-size: 16px;
    color: #000000;
    line-height: 20px;
    margin-top: 0;
`;

export const TextWelcome = styled(Text)`
    font-size: ${fonts.size.size60};
    font-weight: ${fonts.fontWeight.weight400};
    color: ${color.secondary.lightGray};
    line-height: ${fonts.lineHeight.size60};
`;

export const TextInfo = styled(Text)`
    font-size: ${fonts.size.size16};
    font-weight: ${fonts.fontWeight.weight400};
    color: ${color.secondary.lightGray};
    line-height: ${fonts.lineHeight.size16};
`;

export const TextLogin = styled(Text)`
    font-size: ${fonts.size.size30};
    font-weight: ${fonts.fontWeight.weight400};
    color: ${color.secondary.lightGray};
    line-height: ${fonts.lineHeight.size30};
    margin-top: 135px;
`;