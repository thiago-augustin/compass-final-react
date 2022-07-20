import styled from 'styled-components';

export const Invalid = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 5px;
    color: #f50707;
    opacity: 1;
    &.valid {
        color: #15e60e;
    }
`
export const InvalidLast = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 30px;
    color: #f50707;
    opacity: 1;
    &.valid {
        color: #15e60e;
    }
`

export const Alert = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 30px;
    color: #E9B425;
    opacity: 1;
    &.valid {
        color: #15e60e;
    }
`