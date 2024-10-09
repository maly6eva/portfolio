import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader>
                <Logo/>
                <Menu/>

        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    z-index: 999;
    
    
`


