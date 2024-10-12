import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu/>
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


