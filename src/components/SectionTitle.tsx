import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";


export const SectionTitle = styled.h2`
    ${font({family: '"Playfair Display", sans-serif', weight: 700})};
    text-align: center;
    font-size: 48px;
    line-height: 72px;
    margin-bottom: 80px;
    position: relative;


 
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
        
        @media ${Theme.media.contText} {
            padding: 0;
        }
    }
    // @media ${Theme.media.tab} {
    //     margin-bottom: 50px;
    // }
  
`