import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const Logo = () => {
    return (
        <Name href="">Ksenia Malysheva
        </Name>
    );
};

const Name = styled.a`
    font-family: Comfortaa, Bold sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 180%;
    color: ${Theme.colors.spanCl};
`
