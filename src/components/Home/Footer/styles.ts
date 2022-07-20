import styled from "styled-components";
import { color, fonts } from "components/UI/variables";

export const FooterStyle = styled.footer`
    display: flex;
    margin-top: auto;
    width: 100vw;
    height: 100px;
    display: flex;
    background: ${color.gradient.gray};
    align-items: center;
`;

export const InfoDiv = styled.div`
    width: 50vw;
    flex-grow: 1;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ParagraphDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10vw;
`;

export const Paragraph = styled.p`
    font-weight: ${fonts.fontWeight.weight400};
    font-size: ${fonts.size.size12};
    line-height: ${fonts.lineHeight.size12};
    color: ${color.primary.white};
    text-align: right;
`;

export const Divider = styled.div`
    margin-left: 34px;
    width: 1px;
    height: 80px;
    background-color: ${color.primary.white};
`;

export const ButtonDiv = styled.div`
    display: flex;
    align-self: stretch;
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
`;

export const NavigateButton = styled(LogoutButton)`
    text-align: center;
    font-weight: ${fonts.fontWeight.weight400};
    background: ${color.primary.white};
    color: ${color.primary.darkOrange};
`;