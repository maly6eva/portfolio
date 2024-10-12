import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <ListItem>
                    <Link href="">About</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Projects</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Contacts</Link>
                </ListItem>
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`  
    ul{
        display: flex;
        gap: 48px;
       
      
    }
`

const ListItem = styled.li` 

    
`

const Link = styled.a`
    font-family: Raleway, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    color: ${Theme.colors.spanCl};
    position: relative;
`