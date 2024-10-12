import styled from "styled-components";
import {Theme} from "../styles/Theme";


export const SectionTitle = styled.h2`
    position: relative;
    text-align: center;
    font-family: "Playfair Display", sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 72px;
    
    &::before {
        content: '';
        width: 100px;
        height: 4px;
        border: 2px solid ${Theme.colors.accent};
        position: absolute;
        top: 70px;
        right: 565px;
        
    }
`