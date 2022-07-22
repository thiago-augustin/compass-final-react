import styled from "styled-components";
import { color, fonts } from "components/UI/variables";

export const Register = styled.div`
    text-align: center;
    margin-top: 20px;
    width:100%;
    color: ${color.primary.white};
    a{
        color:orange;
        cursor:pointer;
        &:hover {
            text-decoration:underline;
        }
    }

    @media (max-width: 320.9px){
        font-size: ${fonts.size.size12};
        line-height: ${fonts.lineHeight.size12};
    }

    @media (min-width: 321px) and (max-width: 475.9px){
        font-size: ${fonts.size.size14};
        line-height: ${fonts.lineHeight.size14};
    }

    @media (min-width: 376px) and (max-width: 475.9px){
        font-size: ${fonts.size.size16};
        line-height: ${fonts.lineHeight.size16};
    }

    @media (min-width: 1921px){
        font-size: ${fonts.size.size20};
        line-height: ${fonts.lineHeight.size20};
    }
`;