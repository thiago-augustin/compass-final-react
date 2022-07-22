import styled from "styled-components";
import { fonts, color } from "components/UI/variables";

export const ClockDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 425.9px){
        order: 3;
        width: 100%;
        margin: 0;
    }
`

export const TimeDiv = styled.div`
    width: 327px;
    font-weight: ${fonts.fontWeight.weight700};
    font-size: ${fonts.size.size144};
    line-height: ${fonts.lineHeight.size144};
    color: ${color.secondary.darkGray};
    text-align: center;

    @media (max-width: 360.9px){
        width: 100%;
        font-size: 100px;
        line-height: 100px;
    }

    @media (min-width: 361px) and (max-width: 375.9px){
        font-size: 110px;
        line-height: 110px;
    }

    @media (min-width: 376px) and (max-width: 768.9px){
        font-size: 136px;
        line-height: 136px;
    }

    @media (min-width: 769px) and (max-width: 1024.9px){
        font-size: 110px;
        line-height: 110px;
    }
`

export const DateDiv = styled.div`
    font-weight: ${fonts.fontWeight.weight400};
    font-size: ${fonts.size.size14};
    line-height: ${fonts.lineHeight.size14};

    @media (max-width: 375.9px){
        font-size: ${fonts.size.size12};
        line-height: ${fonts.lineHeight.size12};
    }

    @media (min-width: 426px) and (max-width: 768.9px){
        font-size: ${fonts.size.size16};
        line-height: ${fonts.lineHeight.size16};
    }
`