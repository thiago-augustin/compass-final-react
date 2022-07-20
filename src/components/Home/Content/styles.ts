import styled from 'styled-components'
import { color, fonts } from "components/UI/variables";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:end;
    width:100%;
    flex-grow:1;
    padding-right: 134px;
`

export const MainTitle = styled.h1`
    font-weight: ${fonts.fontWeight.weight700};
    font-size: ${fonts.size.size64};
    line-height: ${fonts.lineHeight.size64};
    color: ${color.primary.darkOrange};
    text-align: right;
`
export const FirstMainTitle = styled.h2`
    font-weight: ${fonts.fontWeight.weight700};
    font-size: ${fonts.size.size36};
    line-height: ${fonts.lineHeight.size36};
    color: ${color.primary.darkOrange};
    text-align: right;
`

export const SecondaryContent = styled.p`
    font-weight: ${fonts.fontWeight.weight400};
    font-size: ${fonts.size.size24};
    line-height: ${fonts.lineHeight.size24};
    color: ${color.secondary.darkGray};
    text-align: right;
`