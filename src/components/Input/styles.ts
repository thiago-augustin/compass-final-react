import styled from "styled-components";
import { fonts, color } from "components/UI/variables";

const InputSqueleton = styled.input`
    width: 100%;
    height: 60px;
    border-radius: 50px;
    border: 2px solid transparent;
    font-size: ${fonts.size.size16};
    font-weight: ${fonts.fontWeight.weight400};
    line-height: ${fonts.lineHeight.size16};
    padding: 20px;
    padding-right: 40px;

    @media (max-width: 320.9px){
        height 38px;
        padding: 19px;
        padding-right: 40px;
        border: 1px solid;
        font-size: ${fonts.size.size14};
        line-height: ${fonts.lineHeight.size14};
    }

    @media (min-width: 321px) and (max-width: 375.9px){
        height 48px;
        padding: 19px;
        padding-right: 40px;
        border: 1px solid;
    }

    @media (min-width: 376px) and (max-width: 475.9px){
        height 56px;
    }

    @media (min-width: 1921px){
        height: 64px;
        border: 3px solid;
        font-size: ${fonts.size.size18};
        line-height: ${fonts.lineHeight.size18};
    }
`;

export const LoginInput = styled(InputSqueleton)`
    background: ${color.secondary.darkGray};
    border-color: ${color.secondary.lightGray};
    color: ${color.secondary.lightGray};
    position: relative;
    ::placeholder{
		color: ${color.secondary.lightGray};
	}
	&.error{
		border: 1px solid ${color.primary.yellow};
		border-radius: 50px;
	}
`;



