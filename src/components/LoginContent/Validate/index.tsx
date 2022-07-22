import styled from 'styled-components';
import { color, fonts } from "components/UI/variables";

interface Props {
	error?: boolean
}

export default styled.p<Props>`
    font-weight: ${fonts.fontWeight.weight700};
    font-size: ${fonts.size.size16};
    line-height: ${fonts.lineHeight.size16};
    text-align: center;
    width:100%;
    padding: 2rem 0 1rem;
    color: ${color.primary.yellow};
    opacity:0;
    &.error {
        transition: opacity 0.5s;
        opacity:1;
    }

    @media (max-width: 320.9px){
        font-size: ${fonts.size.size12};
        line-height: ${fonts.lineHeight.size12};
    }

    @media (min-width: 321px) and (max-width: 375.9px){
        font-size: ${fonts.size.size14};
        line-height: ${fonts.lineHeight.size14};
    }

    @media (min-width: 1921px){
        font-size: ${fonts.size.size20};
        line-height: ${fonts.lineHeight.size20};
    }
`