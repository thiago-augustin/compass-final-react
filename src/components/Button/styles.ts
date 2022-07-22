import styled from "styled-components";
import { fonts, color } from "components/UI/variables";

const ButtonSqueleton = styled.button`
    width: 100%;
    height: 67px;
    border: 2px solid transparent;
    border-radius: 50px;
    font-size: ${fonts.size.size18};
    font-weight: ${fonts.fontWeight.weight700};
    line-height: ${fonts.lineHeight.size18};
    cursor: pointer;
    margin-top: auto;

    @media (max-width: 320.9px){
        height: 40px;
        font-size: ${fonts.size.size16};
        line-height: ${fonts.lineHeight.size16};
    }

    @media (min-width: 321px) and (max-width: 375.9px){
        height: 48px;
    }

    @media (min-width: 376px) and (max-width: 425.9px){
        height: 56px;
    }

    @media (min-width: 426px) and (max-width: 768.9px){
        
    }

    @media (min-width: 1921px){
        font-size: ${fonts.size.size20};
        line-height: ${fonts.lineHeight.size20};
        height: 64px;
    }
`;

export const ButtonLogin = styled(ButtonSqueleton)`
    background: ${color.gradient.darkOrange};
    border-color: "#FF2D04";
    color: ${color.primary.white};
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
    box-shadow: inset 5px 5px 10px 0 rgba(0, 0, 0, 0.15);
    
`;



