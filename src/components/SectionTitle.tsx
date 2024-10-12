import styled from "styled-components";
import {Theme} from "../styles/Theme";


export const SectionTitle = styled.h2`
    position: relative;
    text-align: center;
    font-family: "Playfair Display", sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    margin-bottom: 80px;
    
    &::before {
        content: '';
        display: inline-block;
        width: 100px;
        height: 4px;
        background-color: ${Theme.colors.accent};
        position: absolute;
        left: 50%;
        bottom: -15%;
        transform: translateX(-50%);
        
    }
`