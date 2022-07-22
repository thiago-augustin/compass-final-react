import styled from 'styled-components';
import { fonts, color } from 'components/UI/variables';

export const Invalid = styled.span`
    display: flex;
    flex-direction: row;
    width: 16px;
    font-weight: ${fonts.fontWeight.weight500};
    font-size: ${fonts.size.size16};
    line-height: ${fonts.lineHeight.size16};
    text-align: left;
    width: 100%;
    padding-top: 2%;
    padding-bottom: 1%;
    color: #f50707;
    opacity: 1;
    &.valid {
        color: #15e60e;
    }

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
`
export const InvalidLast = styled.span`
    display: flex;
    flex-direction: row;
    width: 16px;
    font-weight: ${fonts.fontWeight.weight500};
    font-size: ${fonts.size.size16};
    line-height: ${fonts.lineHeight.size16};
    text-align: left;
    width: 100%;
    padding-top: 2%;
    padding-bottom: 10%;
    color: #f50707;
    opacity: 1;
    &.valid {
        color: #15e60e;
    }

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
`

export const ErrorIcon = styled.div`
    margin-right: 2%;
    img {
        width: 16px;
    }
`

export const CorrectIcon = styled.div`
    img {
        width: 16px;
    }
`

export const Alert = styled.span`
    font-weight: ${fonts.fontWeight.weight500};
    font-size: ${fonts.size.size16};
    line-height: ${fonts.lineHeight.size16};
    text-align: left;
    width: 100%;
    padding-top: 2%;
    padding-bottom: 1%;
    color: #f50707;
    opacity: 1;
    &.valid {
        color: #15e60e;
    }

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
`