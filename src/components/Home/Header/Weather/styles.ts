import styled from "styled-components";
import { fonts } from "components/UI/variables";

export const WeatherDiv = styled.div`
    margin-top: 25px;
    margin-right: 40px;
    min-width: 121px;
    display: flex;
    flex-direction:column;
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
`

export const TemperatureDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const TemperatureContent = styled.h3`
    font-weight: ${fonts.fontWeight.weight700};
    font-size: ${fonts.lineHeight.size48};
`;

export const IconDiv = styled.div`
    width: 34px;
    height: 34px; 
    margin-right: 0.75rem;
    svg{
        width:100%;
        height: 100%;
    }
`;