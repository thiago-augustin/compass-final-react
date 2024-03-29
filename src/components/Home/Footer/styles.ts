import styled from "styled-components";
import { color, fonts } from "components/UI/variables";

export const FooterStyle = styled.footer`
    display: flex;
    margin-top: auto;
    width: 100%;
    height: 100px;
    background: ${color.gradient.gray};
    align-items: center;

    @media (max-width: 425.9px){
        flex-direction: column;
        height: 280px;
    }

    @media (min-width: 426px) and (max-width: 768.9px){
        flex-direction: row;
        height: 100px;
    }
`;

export const InfoDiv = styled.div`
    width: 50vw;
    flex-grow: 1;
    display:flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 425.9px){
        width: 100%;
        height: 75px;
        flex-direction: column;
    }
`;

export const ParagraphDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10vw;

    @media (max-width: 425.9px){
        width: 100%;
        padding: 3%;
        margin: 0;
        order: 1;
    }

    @media (min-width: 426px) and (max-width: 1024.9px){
        width: 50%;
        margin: 0;
    }
`;

export const Paragraph = styled.p`
    font-weight: ${fonts.fontWeight.weight400};
    font-size: ${fonts.size.size12};
    line-height: ${fonts.lineHeight.size12};
    color: ${color.primary.white};
    text-align: right;

    @media (max-width: 425.9px){
        text-align: justify;
        margin-bottom: 2%;
        br {
            display: none;
        }
    }

    @media (min-width: 426px) and (max-width: 1024.9px){
        text-align: justify;

        br {
            display: none;
        }
    }

    @media (min-width: 1920){
        font-size: ${fonts.size.size16};
        line-height: ${fonts.lineHeight.size16};
    }
`;

export const Divider = styled.div`
    margin-left: 34px;
    width: 1px;
    height: 80px;
    background-color: ${color.primary.white};

    @media (max-width: 425.9px){
        display: none;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    align-self: stretch;

    @media (max-width: 425.9px){
        width: 100%;
        height: 100px;
        justify-content: space-between;
    }
`;

export const LogoutButton = styled.button`
    height: 100%;
    width: 130px;
    padding: 1.25rem;
    background-color: transparent;
    border: none;
    font-weight: ${fonts.fontWeight.weight700};
    font-size: ${fonts.size.size12};
    line-height: ${fonts.lineHeight.size12};
    color: ${color.primary.white};

    @media (max-width: 425.9px){
        width: 50%;
    }
`;

export const NavigateButton = styled(LogoutButton)`
    text-align: center;
    font-weight: ${fonts.fontWeight.weight400};
    background: ${color.primary.white};
    color: ${color.primary.darkOrange};

    @media (max-width: 425.9px){
        width: 50%;
    }
`;