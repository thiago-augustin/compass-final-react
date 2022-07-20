import styled from "styled-components";
import { color } from "components/UI/variables";

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
`;