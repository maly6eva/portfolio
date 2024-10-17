import React from 'react';
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";



const items = ['About', 'Projects', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    padding-top: 14px;
    position: absolute;
    z-index: 1;
    width: 100%;

    
  
`




