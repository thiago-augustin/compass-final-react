import styled from "styled-components";
import { fonts, color } from "components/UI/variables";

const InputSqueleton = styled.input`
    width: 379px;
    height: 60px;
    border-radius: 50px;
    border: 2px solid transparent;
`;

export const LoginInput = styled(InputSqueleton)`
    background: ${color.secondary.darkGray};
    border-color: ${color.secondary.lightGray};
    color: ${color.secondary.lightGray};
    position: relative;
    padding: 20px;
    font-size: ${fonts.size.size16};
    font-weight: ${fonts.fontWeight.weight400};
    line-height: ${fonts.lineHeight.size16};
    ::placeholder{
		color: ${color.secondary.lightGray};
	}
	&.error{
		border: 1px solid ${color.primary.yellow};
		border-radius: 50px;
	}
`;



