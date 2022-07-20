import styled from "styled-components";
import { fonts, color } from "components/UI/variables";

export const ClockDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const TimeDiv = styled.div`
    min-width: 327px;
    min-height: 146px;
    font-weight: ${fonts.fontWeight.weight700};
    font-size: ${fonts.size.size144};
    line-height: ${fonts.lineHeight.size144};
    color: ${color.secondary.darkGray};
    text-align: center;
`

export const DateDiv = styled.div`
    font-weight: ${fonts.fontWeight.weight400};
    font-size: ${fonts.size.size14};
    line-height: ${fonts.lineHeight.size14};
`