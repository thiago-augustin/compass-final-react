import { fonts, color } from 'components/UI/variables';
import styled from 'styled-components'

export const SessionDiv = styled.div`
    display: flex;
    min-width: 230px;
    justify-content: space-around;
    align-items: center;
`;

export const InfoSession = styled.h3`
    font-weight: ${fonts.fontWeight.weight400};
    font-size: ${fonts.size.size14};
    line-height: ${fonts.lineHeight.size14};
    color: ${color.primary.white};
    text-align: right;
`;

export const TimerDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const TimerContent = styled.h2`
    font-weight: ${fonts.fontWeight.weight700};
    font-size: ${fonts.size.size48};
    line-height: ${fonts.lineHeight.size48};
    color: ${color.primary.white};
`;

export const Seconds = styled.span`
    font-weight: ${fonts.fontWeight.weight400};
    font-size: ${fonts.size.size14};
    line-height: ${fonts.lineHeight.size14};
    color: ${color.primary.white};
    text-align: right;
`;
