import styled from 'styled-components'
import { color, fonts } from "components/UI/variables";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:end;
    width:100%;
    flex-grow:1;
    padding-right: 3%;
    br {
        display: none;
    }

    @media (max-width: 360.9px){
        margin: 10% 0;
        width: 97%;

        br {
            display: flex;
        }
    }

    @media (min-width: 361px) and (max-width: 375.9px){
        margin: 9% 0;
        width: 97%;

        br {
            display: flex;
        }
    }

    @media (min-width: 376px) and (max-width: 425.9px){
        margin: 11% 0;
        width: 97%;

        br {
            display: flex;
        }
    }
`

export const MainTitle = styled.h1`
    font-weight: ${fonts.fontWeight.weight700};
    font-size: ${fonts.size.size64};
    line-height: ${fonts.lineHeight.size64};
    color: ${color.primary.darkOrange};
    text-align: right;

    @media (max-width: 360.9px){
        font-size: ${fonts.size.size24};
        line-height: ${fonts.lineHeight.size24};
    }

    @media (min-width: 361px) and (max-width: 375.9px){
        font-size: ${fonts.size.size26};
        line-height: ${fonts.lineHeight.size26};
    }

    @media (min-width: 376px) and (max-width: 425.9px){
        font-size: ${fonts.size.size28};
        line-height: ${fonts.lineHeight.size28};
    }

    @media (min-width: 426px) and (max-width: 768.9px){
        font-size: ${fonts.size.size56};
        line-height: ${fonts.lineHeight.size56};
    }

    @media (min-width: 769px) and (max-width: 1024.9px){
        font-size: ${fonts.size.size48};
        line-height: ${fonts.lineHeight.size48};
    }
`

export const FirstMainTitle = styled.h2`
    font-weight: ${fonts.fontWeight.weight700};
    font-size: ${fonts.size.size36};
    line-height: ${fonts.lineHeight.size36};
    color: ${color.primary.darkOrange};
    text-align: right;

    @media (max-width: 360.9px){
        font-size: ${fonts.size.size20};
        line-height: ${fonts.lineHeight.size20};
    }

    @media (min-width: 361px) and (max-width: 375.9px){
        font-size: ${fonts.size.size22};
        line-height: ${fonts.lineHeight.size22};
    }

    @media (min-width: 376px) and (max-width: 425.9px){
        font-size: ${fonts.size.size24};
        line-height: ${fonts.lineHeight.size24};
    }

    @media (min-width: 426px) and (max-width: 768.9px){
        font-size: ${fonts.size.size32};
        line-height: ${fonts.lineHeight.size32};
    }

    @media (min-width: 769px) and (max-width: 1024.9px){
        font-size: ${fonts.size.size28};
        line-height: ${fonts.lineHeight.size28};
    }
`

export const SecondaryContent = styled.p`
    font-weight: ${fonts.fontWeight.weight400};
    font-size: ${fonts.size.size24};
    line-height: ${fonts.lineHeight.size24};
    color: ${color.secondary.darkGray};
    text-align: right;

    @media (max-width: 360.9px){
        font-size: ${fonts.size.size14};
        line-height: ${fonts.lineHeight.size14};
        margin-top: 1%;
        margin-bottom: 2%;
    }

    @media (min-width: 361px) and (max-width: 375.9px){
        font-size: ${fonts.size.size16};
        line-height: ${fonts.lineHeight.size16};
        margin-top: 1%;
        margin-bottom: 2%;
    }

    @media (min-width: 376px) and (max-width: 425.9px){
        font-size: ${fonts.size.size18};
        line-height: ${fonts.lineHeight.size18};
        margin-top: 1%;
        margin-bottom: 2%;
    }

    @media (min-width: 426px) and (max-width: 768.9px){
        font-size: ${fonts.size.size24};
        line-height: ${fonts.lineHeight.size24};
        margin-top: 1%;
        margin-bottom: 2%;

        br{
            display: flex;
        }
    }

    @media (min-width: 769px) and (max-width: 1024.9px){
        font-size: ${fonts.size.size20};
        line-height: ${fonts.lineHeight.size20};
        margin-top: 1%;
        margin-bottom: 2%;
    }
`