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

    @media (max-width: 320.9px){
        font-size: ${fonts.size.size36};
        line-height: ${fonts.lineHeight.size36};
    }

    @media (min-width: 321px) and (max-width: 475.9px){
        font-size: ${fonts.size.size40};
        line-height: ${fonts.lineHeight.size40};
    }

    @media (min-width: 376px) and (max-width: 475.9px){
        font-size: ${fonts.size.size48};
        line-height: ${fonts.lineHeight.size48};
    }

    @media (min-width: 1921px){
        font-size: ${fonts.size.size64};
        line-height: ${fonts.lineHeight.size64};
    }
`;

export const TextInfo = styled(Text)`
    font-size: ${fonts.size.size16};
    font-weight: ${fonts.fontWeight.weight400};
    color: ${color.secondary.lightGray};
    line-height: ${fonts.lineHeight.size16};
    margin-top: 2%;

    @media (max-width: 320.9px){
        font-size: ${fonts.size.size14};
        line-height: ${fonts.lineHeight.size14};
    }

    @media (min-width: 321px) and (max-width: 475.9px){
        font-size: ${fonts.size.size16};
        line-height: ${fonts.lineHeight.size16};
    }

    @media (min-width: 1921px){
        font-size: ${fonts.size.size20};
        line-height: ${fonts.lineHeight.size20};
    }
`;

export const TextLogin = styled(Text)`
    font-size: ${fonts.size.size30};
    font-weight: ${fonts.fontWeight.weight400};
    color: ${color.secondary.lightGray};
    line-height: ${fonts.lineHeight.size30};
    margin-top: 35%;

    @media (max-width: 320.9px){
        font-size: ${fonts.size.size24};
        line-height: ${fonts.lineHeight.size24};
        margin-top: 15%;
    }

    @media (min-width: 321px) and (max-width: 375.9px){
        font-size: ${fonts.size.size28};
        line-height: ${fonts.lineHeight.size28};
        margin-top: 15%;
    }

    @media (min-width: 376px) and (max-width: 475.9px){
        margin-top: 20%;
    }

    @media (min-width: 476px) and (max-width: 539.9px){
        margin-top: 20%;
    }

    @media (min-width: 540px) and (max-width: 769.9px){
        margin-top: 20%;
    }

    @media (min-width: 769px) and (max-width: 1024.9px){
        margin-top: 15%;
    }

    @media (min-width: 1025px) and (max-width: 1440.9px){
        margin-top: 25%;
    }

    @media (min-width: 1441px) and (max-width: 1920.9px){
        margin-top: 20%;
    }

    @media (min-width: 1921px){
        font-size: ${fonts.size.size36};
        line-height: ${fonts.lineHeight.size36};
        margin-top: 20%;
    }
`;