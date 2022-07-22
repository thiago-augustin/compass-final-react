import styled from "styled-components";
import { fonts } from "components/UI/variables";

export const WeatherDiv = styled.div`
    min-width: 121px;
    display: flex;
    flex-direction:column;

    @media (max-width: 425.9px){
        order: 2;
    }
`;

export const LocationDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const LocationContent = styled.h2`
    font-style: normal;
    font-weight: ${fonts.fontWeight.weight400};
    font-size: ${fonts.size.size14};
    line-height: ${fonts.lineHeight.size14};
    text-align: center;

    @media (max-width: 425.9px){
        width: 100%;
        font-size: 12px;
        line-height: 14px;
    }
`

export const TemperatureDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const TemperatureContent = styled.h3`
    font-weight: ${fonts.fontWeight.weight700};
    font-size: ${fonts.lineHeight.size48};

    @media (max-width: 425.9px){
        font-size: 36px;
    }
`;

export const IconDiv = styled.div`
    width: 34px;
    height: 34px; 
    margin-right: 0.75rem;
    svg{
        width:100%;
        height: 100%;
    }

    @media (max-width: 425.9px){
        width: 24;
        height: 24;
    }
`;