import React from 'react';
import styled from "styled-components";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contacts</a>
                </li>
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`  
    ul{
        display: flex;
        gap: 48px;
    }
    
    a{
        font-family: Raleway, sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px;
    }
`