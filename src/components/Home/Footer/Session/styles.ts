import { fonts, color } from 'components/UI/variables';
import styled from 'styled-components'

export const SessionDiv = styled.div`
    display: flex;
    width: 230px;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 375.9px){
        width: 100%;
        height: 75px;
    }
`;

export const InfoSession = styled.h3`
    font-weight: ${fonts.fontWeight.weight400};
    font-size: ${fonts.size.size14};
    line-height: ${fonts.lineHeight.size14};
    color: ${color.primary.white};
    text-align: right;

    @media (max-width: 375.9px){
        width: 50%;
    }
`;

export const TimerDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (max-width: 425.9px){
        width: 100%;
        height: 100px;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 426px){
        justify-content: center;
        align-items: center;
    }
`;

export const TimerContent = styled.h2`
    font-weight: ${fonts.fontWeight.weight700};
    font-size: ${fonts.size.size48};
    line-height: ${fonts.lineHeight.size48};
    color: ${color.primary.white};

    @media (max-width: 375.9px){
        font-size: ${fonts.size.size36};
        line-height: ${fonts.lineHeight.size36};
    }
`;

export const Seconds = styled.span`
    font-weight: ${fonts.fontWeight.weight400};
    font-size: ${fonts.size.size14};
    line-height: ${fonts.lineHeight.size14};
    color: ${color.primary.white};
    text-align: right;

    @media (max-width: 375.9px){
        font-size: ${fonts.size.size12};
        line-height: ${fonts.lineHeight.size12};
    }
`;
